import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={25} height={25} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M6 1v10M11 6H1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}
export default SvgComponent;
