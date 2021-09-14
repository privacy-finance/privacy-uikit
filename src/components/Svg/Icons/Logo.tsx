import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 320 320" {...props}>
      <image width="320" height="320" href='/images/custom/logo.png' />
    </Svg>
  );
};

export default Icon;
