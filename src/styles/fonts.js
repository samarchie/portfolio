import { css } from 'styled-components';

import RubikRegularWoff from '@fonts/Rubik/Rubik-Regular.woff';
import RubikRegularWoff2 from '@fonts/Rubik/Rubik-Regular.woff2';
import RubikMediumWoff from '@fonts/Rubik/Rubik-Medium.woff';
import RubikMediumWoff2 from '@fonts/Rubik/Rubik-Medium.woff2';
// import RubikBoldWoff from '@fonts/Rubik/Rubik-Bold.woff';
// import RubikBoldWoff2 from '@fonts/Rubik/Rubik-Bold.woff2';

// import RubikRegularItalicWoff from '@fonts/Rubik/Rubik-Regular.woff';
// import RubikRegularItalicWoff2 from '@fonts/Rubik/Rubik-Regular.woff2';
// import RubikMediumItalicWoff from '@fonts/Rubik/Rubik-Medium.woff';
// import RubikMediumItalicWoff2 from '@fonts/Rubik/Rubik-Medium.woff2';
// import CalibreSemiboldItalicWoff from '@fonts/Calibre/Calibre-SemiboldItalic.woff';
// import CalibreSemiboldItalicWoff2 from '@fonts/Calibre/Calibre-SemiboldItalic.woff2';

import OpenSansRegularWoff from '@fonts/OpenSans/OpenSans-Regular.woff';
import OpenSansRegularWoff2 from '@fonts/OpenSans/OpenSans-Regular.woff2';
import OpenSansSemiBoldWoff from '@fonts/OpenSans/OpenSans-Semibold.woff';
import OpenSansSemiBoldWoff2 from '@fonts/OpenSans/OpenSans-Semibold.woff2';

import OpenSansRegularItalicWoff from '@fonts/OpenSans/OpenSans-Italic.woff';
import OpenSansRegularItalicWoff2 from '@fonts/OpenSans/OpenSans-Italic.woff2';
import OpenSansSemiBoldItalicWoff from '@fonts/OpenSans/OpenSans-SemiboldItalic.woff';
import OpenSansSemiBoldItalicWoff2 from '@fonts/OpenSans/OpenSans-SemiboldItalic.woff2';

const rubikNormalWeights = {
  400: [RubikRegularWoff, RubikRegularWoff2],
  500: [RubikRegularWoff, RubikRegularWoff2],
  600: [RubikMediumWoff, RubikMediumWoff2],
};

// const calibreItalicWeights = {
// 400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
// 500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
// 600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
// };

const openSansNormalWeights = {
  400: [OpenSansRegularWoff, OpenSansRegularWoff2],
  600: [OpenSansSemiBoldWoff, OpenSansSemiBoldWoff2],
};

const openSansItalicWeights = {
  400: [OpenSansRegularItalicWoff, OpenSansRegularItalicWoff2],
  600: [OpenSansSemiBoldItalicWoff, OpenSansSemiBoldItalicWoff2],
};

const rubik = {
  name: 'Rubik',
  normal: rubikNormalWeights,
  // italic: calibreItalicWeights,
};

const openSans = {
  name: 'Open Sans',
  normal: openSansNormalWeights,
  italic: openSansItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const rubikNormal = createFontFaces(rubik);
// const calibreItalic = createFontFaces(calibre, 'italic');

const openSansNormal = createFontFaces(openSans);
const openSansItalic = createFontFaces(openSans, 'italic');

const Fonts = css`
  ${rubikNormal + openSansNormal + openSansItalic}
`;

export default Fonts;
