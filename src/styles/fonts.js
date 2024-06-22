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

// import clashDisplayLightWoff from           '@fonts/ClashDisplay/ClashDisplay-Light.woff';
// import clashDisplayLightWoff2 from          '@fonts/ClashDisplay/ClashDisplay-Light.woff2';
import clashDisplayRegularWoff from '@fonts/ClashDisplay/ClashDisplay-Regular.woff';
import clashDisplayRegularWoff2 from '@fonts/ClashDisplay/ClashDisplay-Regular.woff2';
import clashDisplaySemiBoldWoff from '@fonts/ClashDisplay/ClashDisplay-Semibold.woff';
import clashDisplaySemiBoldWoff2 from '@fonts/ClashDisplay/ClashDisplay-Semibold.woff2';
import clashDisplayBoldWoff from '@fonts/ClashDisplay/ClashDisplay-Bold.woff';
import clashDisplayBoldWoff2 from '@fonts/ClashDisplay/ClashDisplay-Bold.woff2';

import InterRegularWoff from '@fonts/Inter/Inter-Regular.woff';
import InterRegularWoff2 from '@fonts/Inter/Inter-Regular.woff2';
import InterSemiBoldWoff from '@fonts/Inter/Inter-SemiBold.woff';
import InterSemiBoldWoff2 from '@fonts/Inter/Inter-SemiBold.woff2';
import InterBoldWoff from '@fonts/Inter/Inter-Bold.woff';
import InterBoldWoff2 from '@fonts/Inter/Inter-Bold.woff2';

import InterRegularItalicWoff from '@fonts/Inter/Inter-Italic.woff';
import InterRegularItalicWoff2 from '@fonts/Inter/Inter-Italic.woff2';
import InterSemiBoldItalicWoff from '@fonts/Inter/Inter-SemiBoldItalic.woff';
import InterSemiBoldItalicWoff2 from '@fonts/Inter/Inter-SemiBoldItalic.woff2';
import InterBoldItalicWoff from '@fonts/Inter/Inter-BoldItalic.woff';
import InterBoldItalicWoff2 from '@fonts/Inter/Inter-BoldItalic.woff2';

import MontserratRegularWoff from '@fonts/Montserrat/Montserrat-Regular.woff';
import MontserratRegularWoff2 from '@fonts/Montserrat/Montserrat-Regular.woff2';
import MontserratSemiBoldWoff from '@fonts/Montserrat/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from '@fonts/Montserrat/Montserrat-SemiBold.woff2';
import MontserratBoldWoff from '@fonts/Montserrat/Montserrat-Bold.woff';
import MontserratBoldWoff2 from '@fonts/Montserrat/Montserrat-Bold.woff2';

import MontserratRegularItalicWoff from '@fonts/Montserrat/Montserrat-Italic.woff';
import MontserratRegularItalicWoff2 from '@fonts/Montserrat/Montserrat-Italic.woff2';
import MontserratSemiBoldItalicWoff from '@fonts/Montserrat/Montserrat-SemiBoldItalic.woff';
import MontserratSemiBoldItalicWoff2 from '@fonts/Montserrat/Montserrat-SemiBoldItalic.woff2';
import MontserratBoldItalicWoff from '@fonts/Montserrat/Montserrat-BoldItalic.woff';
import MontserratBoldItalicWoff2 from '@fonts/Montserrat/Montserrat-BoldItalic.woff2';

import ArchivoRegularWoff from '@fonts/Archivo/Archivo-Regular.woff';
import ArchivoRegularWoff2 from '@fonts/Archivo/Archivo-Regular.woff2';
import ArchivoSemiBoldWoff from '@fonts/Archivo/Archivo-SemiBold.woff';
import ArchivoSemiBoldWoff2 from '@fonts/Archivo/Archivo-SemiBold.woff2';
import ArchivoBoldWoff from '@fonts/Archivo/Archivo-Bold.woff';
import ArchivoBoldWoff2 from '@fonts/Archivo/Archivo-Bold.woff2';

const archivoNormalWeights = {
  400: [ArchivoRegularWoff, ArchivoRegularWoff2],
  500: [ArchivoSemiBoldWoff, ArchivoSemiBoldWoff2],
  600: [ArchivoBoldWoff, ArchivoBoldWoff2],
};

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

const clashDisplayNormalWeights = {
  400: [clashDisplayRegularWoff, clashDisplayRegularWoff2],
  500: [clashDisplaySemiBoldWoff, clashDisplaySemiBoldWoff2],
  600: [clashDisplayBoldWoff, clashDisplayBoldWoff2],
};

const interNormalWeights = {
  400: [InterRegularWoff, InterRegularWoff2],
  500: [InterSemiBoldWoff, InterSemiBoldWoff2],
  600: [InterBoldWoff, InterBoldWoff2],
};

const interItalicWeights = {
  400: [InterRegularItalicWoff, InterRegularItalicWoff2],
  500: [InterSemiBoldItalicWoff, InterSemiBoldItalicWoff2],
  600: [InterBoldItalicWoff, InterBoldItalicWoff2],
};

const montserratNormalWeights = {
  400: [MontserratRegularWoff, MontserratRegularWoff2],
  500: [MontserratSemiBoldWoff, MontserratSemiBoldWoff2],
  600: [MontserratBoldWoff, MontserratBoldWoff2],
};

const montserratItalicWeights = {
  400: [MontserratRegularItalicWoff, MontserratRegularItalicWoff2],
  500: [MontserratSemiBoldItalicWoff, MontserratSemiBoldItalicWoff2],
  600: [MontserratBoldItalicWoff, MontserratBoldItalicWoff2],
};

const rubik = {
  name: 'Rubik',
  normal: rubikNormalWeights,
};

const archivo = {
  name: 'Archivo',
  normal: archivoNormalWeights,
};

const roboto = {
  name: 'Roboto',
  normal: robotoNormalWeights,
  italic: robotoItalicWeights,
};

const clashDisplay = {
  name: 'Clash Display',
  normal: clashDisplayNormalWeights,
};

const inter = {
  name: 'Inter',
  normal: interNormalWeights,
  italic: interItalicWeights,
};

const montserrat = {
  name: 'Montserrat',
  normal: montserratNormalWeights,
  italic: montserratItalicWeights,
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

const robotoNormal = createFontFaces(roboto);
const robotoItalic = createFontFaces(roboto, 'italic');

const clashDisplayNormal = createFontFaces(clashDisplay);

const interNormal = createFontFaces(inter);
const interItalic = createFontFaces(inter, 'italic');

const montserratNormal = createFontFaces(montserrat);
const montserratItalic = createFontFaces(montserrat, 'italic');

const archivoNormal = createFontFaces(archivo);

const Fonts = css`
  ${clashDisplayNormal +
  archivoNormal +
  montserratNormal +
  montserratItalic +
  interNormal +
  interItalic +
  rubikNormal +
  robotoNormal +
  robotoItalic}
`;

export default Fonts;
