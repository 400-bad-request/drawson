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
  private static globalVariableMap = new Map();
  private static lineColor = '#000000';
  private static lineThickness = 1;
  private static backgroundColor = '#FFFFFF';

  private static eval = {
    Start: e => {
      Compiler.AST = [];
      return e.eval();
    },
    Statement: e => e.eval(),
    Comment: (start, notEnd, commentEnd) => '',
    DrawStatement: (_, objectDefinition, teminator) => {
      let obj = objectDefinition.eval();
      obj.backgroundColor = 'TRANSPARENT';
      obj.lineThickness = Compiler.lineThickness;
      obj.lineColor = Compiler.lineColor;
      Compiler.AST.push(obj);
    },
    ObjectDefinition: e => e.eval(),
    ObjectDefinition_line_definition: (_, a1, a2, a3, a4) =>
      new Line(a1.eval(), a2.eval(), a3.eval(), a4.eval()),
    FillableObjectDefinition_circle_definition: (_, a1, a2, a3) =>
      new Circle(a1.eval(), a2.eval(), a3.eval()),
    FillableObjectDefinition_rect_definition: (_, a1, a2, a3, a4) =>
      new Rect(a1.eval(), a2.eval(), a3.eval(), a4.eval()),
    ArithmeticStatement: e => e.eval(),
    integer_number: (first, rest) => {
      console.log(rest);
      return parseInt(
        first.eval() + rest.children.reduce((acc, val) => acc + val.eval(), '')
      );
    },
    nonZeroDigit: e => e.eval(),
    integer_zero: e => '0',
    digit: e => e.primitiveValue,
    identifier: (first, rest) =>
      Compiler.globalVariableMap.get(
        first.primitiveValue + rest.primitiveValue
      ),
    ArithmeticStatement_arithmetic_parentheses: (_, as, __) => 0,
    ArithmeticStatement_minus_arithmetic_parentheses: (_, _minus, as, __) => 0,
    ArithmeticStatement_arithmetic_operation: (as1, op, as2) => 0,
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
