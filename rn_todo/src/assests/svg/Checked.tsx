import * as React from 'react';
import Svg, {Path, Mask, G, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={30} height={30} viewBox="0 0 16 16" fill="#39C4A5" {...props}>
      <Path
        // fill="#39C4A5"
        d="M0 0h16v16H0z"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
      />

      {/* <Path
        d="M6 1v10M11 6H1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      /> */}
      {/* <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}>
        <Path fill="url(#prefix__pattern1)" d="M0 0h16v16H0z" />
      </Mask>
      <Path fill="#39C4A5" d="M0 0h16v16H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00667)" />
        </Pattern>
        <Pattern
          id="prefix__pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00667)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={150}
          height={150}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs> */}
    </Svg>
  );
}

export default SvgComponent;
