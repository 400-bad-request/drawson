export class Compilator {
  public static grammar: any;
  public static semantics: any = {
    Start: e => {
      return '[' + e.eval() + ']';
    },
    Statement: e => e.eval(),
    Comment: e => null,
    DrawStatement: (_, objectDefinition, params) => null,
  };
}
