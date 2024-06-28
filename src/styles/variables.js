import { css } from 'styled-components';

const variables = css`
  :root {
    --light-background: #d3daea;
    --light-tone: #142e7d;
    --light-text: #535c91;
    --light-text-cta: #142e7d;
    --light-cta: #1b1a55;
    --light-contrast: #e9f6ff;

    --mid-background: #535c91;
    --mid-tone: #6573ab;
    --mid-text: #d3daea;
    --mid-text-cta: #2b2e40;
    --mid-cta: #1b1a55;
    --mid-contrast: #f4f6fa;

    --dark-background: #1b1a55;
    --dark-tone: #142e7d;
    --dark-text: #dee8ff;
    --dark-text-cta: #142e7d;
    --dark-cta: #dee8ff;
    --dark-contrast: #e9f6ff;

    --font-title: 'Clash Display', -apple-system, system-ui, sans-serif;
    --font-paragraph: 'Archivo', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 12px;
    --nav-height: 50px;
    --nav-scroll-height: 50px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
