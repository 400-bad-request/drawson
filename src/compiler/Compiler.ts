import ohm from 'ohm-js';
// @ts-ignore
import grammarUrl from '../grammar.ohm';
import { Line } from './AST/Line';
import { Circle } from './AST/Circle';
import { Rect } from './AST/Rect';

export class Compiler {
  private static grammar: any;
  private static semantics: any;
  private static AST = [];
  private static varMap = new Map();
  private static lineColor = '#000000';
  private static lineThickness = 1;
  private static backgroundColor = '#AA12DF';

  private static clearContext() {
    Compiler.lineColor = '#000000';
    Compiler.lineThickness = 1;
    Compiler.backgroundColor = '#666666';
  }

  private static addToAST(obj, isFilled) {
    if (isFilled) {
      obj.backgroundColor = Compiler.backgroundColor;
    } else {
      obj.backgroundColor = 'TRANSPARENT';
    }
    obj.lineThickness = Compiler.lineThickness;
    obj.lineColor = Compiler.lineColor;
    Compiler.AST.push(obj);
  }

  private static eval = {
    // Base
    Start: e => {
      Compiler.AST = [];
      return e.eval();
    },
    Statement: e => e.eval(),

    // Statements
    Comment: (a, b, c) => '',
    DrawStatement: (_, objectDefinition, __) =>
      Compiler.addToAST(objectDefinition.eval(), false),
    FillStatement: (_, objectDefinition, __) =>
      Compiler.addToAST(objectDefinition.eval(), true),
    ClearStatement: (_, __) => Compiler.clearContext(),
    SetStatement: (_, setDefinition, __) => setDefinition.eval(),

    // Object Definition
    ObjectDefinition: e => e.eval(),
    ObjectDefinition_line_definition: (_, a1, a2, a3, a4) =>
      new Line(a1.eval(), a2.eval(), a3.eval(), a4.eval()),
    FillableObjectDefinition_circle_definition: (_, a1, a2, a3) =>
      new Circle(a1.eval(), a2.eval(), a3.eval()),
    FillableObjectDefinition_rect_definition: (_, a1, a2, a3, a4) =>
      new Rect(a1.eval(), a2.eval(), a3.eval(), a4.eval()),

    // Set Definition
    SetDefinition: (property, value) => {
      switch (property.primitiveValue) {
        case 'color':
          Compiler.backgroundColor = value.eval();
          break;
        case 'paint':
          Compiler.lineColor = value.eval();
          break;
        case 'thickness':
          Compiler.lineThickness = value.eval();
          break;
      }
    },

    // Arithmetic
    ArithmeticStatement: e => e.eval(),
    integer_number: (first, rest) =>
      parseInt(
        first.eval() + rest.children.reduce((acc, val) => acc + val.eval(), '')
      ),
    nonZeroDigit: e => e.eval(),
    integer_zero: e => '0',
    identifier: (first, rest) =>
      first.eval() + rest.children.reduce((acc, val) => acc + val.eval(), ''),
    ArithmeticStatement_variable: idfier => Compiler.varMap.get(idfier.eval()),
    ArithmeticStatement_arithmetic_parentheses: (_, as, __) => as.eval(),
    ArithmeticStatement_minus_arithmetic_parentheses: (_, _minus, as, __) =>
      '-' + as.eval(),
    ArithmeticStatement_arithmetic_operation: (as1, op, as2) => {
      const val1 = as1.eval();
      const val2 = as2.eval();

      console.log(op.eval());
      switch (op.eval()) {
        case '+':
          return val1 + val2;
        case '-':
          return val1 - val2;
        case '*':
          return val1 * val2;
        case '/':
          return val1 / val2;
      }
    },
    arithmeticOperator: e => {
      console.log(e.primitiveValue);
      return e.primitiveValue;
    },

    // For Loop
    ForLoop: (_, idfier, inKeyword, as1, as2, body) => {
      
    },

    // Variable Definition
    DefinitionStatement: (_, idfier, __) => {
      const identifier = idfier.eval();
      if (!Compiler.varMap.has(identifier))
        Compiler.varMap.set(identifier, null);
      else console.error(`variable ${identifier} already defined`);
    },
    AssignmentStatement: (idfier, eq, as, __) => {
      const identifier = idfier.eval();
      if (Compiler.varMap.has(identifier))
        Compiler.varMap.set(identifier, as.eval());
      else console.error(`variable ${identifier} has not yet been defined`);
    },
    DefinitionWithAssignmentStatement: (_, idfier, eq, as, __) => {
      const identifier = idfier.eval();
      if (!Compiler.varMap.has(identifier))
        Compiler.varMap.set(identifier, as.eval());
      else console.error(`variable ${identifier} already defined`);
    },

    // alnum
    alnum: e => e.eval(),
    letter: e => e.eval(),
    upper: e => e.primitiveValue,
    lower: e => e.primitiveValue,
    digit: e => e.primitiveValue,

    // color value
    colorValue: (_, d1, d2, d3, d4, d5, d6) =>
      '#' +
      d1.eval() +
      d2.eval() +
      d3.eval() +
      d4.eval() +
      d5.eval() +
      d6.eval(),
  };

  public static async compile(code: string): Promise<string> {
    let match = Compiler.grammar.match(code);
    if (match.succeeded()) {
      console.log('compilation success 🎉');
      Compiler.semantics(match).eval();
      return JSON.stringify(Compiler.AST, null, 2);
    } else {
      console.error('compilation failure, parsing gone wrong');
      console.error(match.message);
      return '[]';
    }
  }

  public static init() {
    fetch(grammarUrl)
      .then(r => r.text())
      .then(grammar => {
        Compiler.grammar = ohm.grammar(grammar);
        Compiler.semantics = Compiler.grammar
          .createSemantics()
          .addOperation('eval', Compiler.eval);
      });
  }
}
