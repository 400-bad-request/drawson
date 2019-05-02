import React, {FunctionComponent} from "react";
import AceEditor from "react-ace";

import "brace/theme/monokai";

interface Props {
  width: number;
  height: number;
}

export const CodeDisplay: FunctionComponent<Props> = ({ width, height }) => {
  return (
    <AceEditor
        theme={"monokai"}
        width={width + "px"}
        height={height + "px"}
        fontSize={16}
        readOnly={true}
        mode={"json"}
        value={"{\n" +
        "  objectType: \"circle\"\n" +
        "}"}
    />
  );
};
