import React, {FunctionComponent} from "react";
import AceEditor from "react-ace";

import "brace/theme/monokai";
import {MockState} from "../../data/MockState";

interface Props {
  width: number;
  height: number;
}

export const CodeDisplay: FunctionComponent<Props> = ({ width, height }) => {
  return (
    <AceEditor
        theme={"github"}
        width={width + "px"}
        height={height + "px"}
        fontSize={16}
        readOnly={true}
        mode={"json"}
        value={JSON.stringify(MockState, null, 3)}
    />
  );
};
