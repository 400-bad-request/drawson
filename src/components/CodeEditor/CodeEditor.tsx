import React, {FunctionComponent} from "react";
import AceEditor from "react-ace";
import "./CodeEditor.scss";

import "brace/theme/monokai";

interface Props {
  width: number;
  height: number;
}

export const CodeEditor: FunctionComponent<Props> = ({ width, height }) => {
  return (
      <AceEditor theme={"monokai"} width={width + "px"} height={height + "px"} />
  );
};
