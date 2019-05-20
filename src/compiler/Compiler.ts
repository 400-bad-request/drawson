import { semantics } from './semantics';
import ohm from 'ohm-js';
// @ts-ignore
import grammarUrl from '../grammar.ohm';

export class Compiler {
  private static grammar: any;
  private static semantics: any;

  private static AST = [];

  public static compile(code: string) {
    let match = Compiler.grammar.match(code);
    if (match.succeeded()) {
      console.log('compilation success 🎉');
      console.log(JSON.stringify(Compiler.semantics(match).eval()));
    } else {
      console.log('compilation failure, parsing gone wrong');
    }
  }

  public static init() {
    fetch(grammarUrl)
      .then(r => r.text())
      .then(grammar => {
        Compiler.grammar = ohm.grammar(grammar);
        Compiler.semantics = Compiler.grammar
          .createSemantics()
          .addOperation('eval', semantics);
      });
  }
}
