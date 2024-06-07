import { css } from 'styled-components';

import RubikRegularWoff from '@fonts/Rubik/Rubik-Regular.woff';
import RubikRegularWoff2 from '@fonts/Rubik/Rubik-Regular.woff2';
import RubikMediumWoff from '@fonts/Rubik/Rubik-Medium.woff';
import RubikMediumWoff2 from '@fonts/Rubik/Rubik-Medium.woff2';

import RobotoRegularWoff from '@fonts/Roboto/Roboto-Regular.woff';
import RobotoRegularWoff2 from '@fonts/Roboto/Roboto-Regular.woff2';
import RobotoSemiBoldWoff from '@fonts/Roboto/Roboto-Bold.woff';
import RobotoSemiBoldWoff2 from '@fonts/Roboto/Roboto-Bold.woff2';

import RobotoRegularItalicWoff from '@fonts/Roboto/Roboto-Italic.woff';
import RobotoRegularItalicWoff2 from '@fonts/Roboto/Roboto-Italic.woff2';
import RobotoSemiBoldItalicWoff from '@fonts/Roboto/Roboto-BoldItalic.woff';
import RobotoSemiBoldItalicWoff2 from '@fonts/Roboto/Roboto-BoldItalic.woff2';

const rubikNormalWeights = {
  400: [RubikRegularWoff, RubikRegularWoff2],
  500: [RubikRegularWoff, RubikRegularWoff2],
  600: [RubikMediumWoff, RubikMediumWoff2],
};

const robotoNormalWeights = {
  400: [RobotoRegularWoff, RobotoRegularWoff2],
  600: [RobotoSemiBoldWoff, RobotoSemiBoldWoff2],
};

const robotoItalicWeights = {
  400: [RobotoRegularItalicWoff, RobotoRegularItalicWoff2],
  600: [RobotoSemiBoldItalicWoff, RobotoSemiBoldItalicWoff2],
};

const rubik = {
  name: 'Rubik',
  normal: rubikNormalWeights,
  // italic: calibreItalicWeights,
};

const roboto = {
  name: 'Roboto',
  normal: robotoNormalWeights,
  italic: robotoItalicWeights,
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

const robotoNormal = createFontFaces(roboto);
const robotoItalic = createFontFaces(roboto, 'italic');

const Fonts = css`
  ${rubikNormal + robotoNormal + robotoItalic}
`;

export default Fonts;
