import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 560 145" {...props}>
      <image width="560" height="145" href={isDark ? '/images/custom/logo-text-dark.png' : '/images/custom/logo-text-white.png'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
