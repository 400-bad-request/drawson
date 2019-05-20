export const semantics = {
  Start: e => e.eval(),
  Statement: e => e.eval(),
  Comment: (start, notEnd, commentEnd) => '',
  DrawStatement: (_, objectDefinition, teminator) => {
    return '{' + '}';
  },
};
