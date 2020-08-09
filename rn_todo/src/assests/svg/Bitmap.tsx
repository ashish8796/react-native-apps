import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={30} height={30} viewBox="0 0 16 16" fill="none" {...props}>
      <Path opacity={0.367} fill="url(#prefix__pattern0)" d="M0 0h16v16H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
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
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
