import ohm from 'ohm-js';
import range from 'lodash.range';
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
      Compiler.varMap = new Map();
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
    AddStatement: e => e.eval(),
    AddStatement_plus: (as1, _, as2) => as1.eval() + as2.eval(),
    AddStatement_minus: (as1, _, as2) => as1.eval() - as2.eval(),

    MulStatement: e => e.eval(),
    MulStatement_times: (as1, _, as2) => as1.eval() * as2.eval(),
    MulStatement_divide: (as1, _, as2) => as1.eval() / as2.eval(),

    PriStatement: e => e.eval(),
    PriStatement_paren: (lp, as, rp) => as.eval(),
    PriStatement_pos: (_, as) => as.eval(),
    PriStatement_neg: (_, as) => -as.eval(),
    PriStatement_var: e => {
      const identifier = e.eval();
      return Compiler.varMap.get(identifier);
    },

    integer_number: (first, rest) =>
      parseInt(
        first.eval() + rest.children.reduce((acc, val) => acc + val.eval(), '')
      ),
    nonZeroDigit: e => e.eval(),
    integer_zero: e => '0',
    identifier: (first, rest) =>
      first.eval() + rest.children.reduce((acc, val) => acc + val.eval(), ''),

    // For Loop
    ForLoop: (_, idfier, inKeyword, as1, as2, body) => {
      const loopRange = range(as1.eval(), as2.eval());
      loopRange.forEach(el => {
        Compiler.varMap.set(idfier.eval(), el);
        body.eval();
      });
    },

    // While Loop:
    WhileLoop: (_, _lp, cond, _rp, body) => {
      while (cond.eval()) {
        body.eval();
      }
    },

    LoopBody: (_, body, __) => body.eval(),

    // Condition Statement:
    ConditionalStatement: e => e.eval(),
    OrStatement_exp: (orst, _, andst) => orst.eval() || andst.eval(),
    OrStatement: andst => andst.eval(),
    AndStatement: logexp => logexp.eval(),
    AndStatement_exp: (andst, _, logexp) => andst.eval() && logexp.eval(),

    // Logical:
    LogicalExp_not: (_, val) => !val.eval(),
    LogicalExp_relation: e => e.eval(),
    LogicalExp_paren: (_lp, cond, _rp) => cond.eval(),
    LogicalExp_bool: bool => bool.eval(),

    boolean: e => (e.primitiveValue === 'true' ? true : false),

    // Relation:
    RelationStatement_gt: (as1, _, as2) => as1.eval() > as2.eval(),
    RelationStatement_lt: (as1, _, as2) => as1.eval() < as2.eval(),
    RelationStatement_geq: (as1, _, as2) => as1.eval() >= as2.eval(),
    RelationStatement_leq: (as1, _, as2) => as1.eval() <= as2.eval(),
    RelationStatement_eq: (as1, _, as2) => as1.eval() == as2.eval(),
    RelationStatement_neq: (as1, _, as2) => as1.eval() != as2.eval(),

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
