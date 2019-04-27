import React from "react";
import AceEditor from "react-ace";
import brace from "brace";

import "brace/theme/monokai";

interface Props {
  width: number;
  height: number;
}

export const CodeEditor: React.SFC<Props> = ({ width, height }) => {
  return (
    <AceEditor theme={"monokai"} width={width + "px"} height={height + "px"} />
  );
};
