import { css } from 'styled-components';

const button = css`
  color: var(--light-cta);
  background-color: transparent;
  border: 1px solid var(--light-cta);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-title);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--light-cta);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--light-cta);
    font-weight: 500;

    &:hover,
    &:focus-visible {
      color: var(--light-cta);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--light-cta);
    transition: var(--transition);
    font-weight: 500;

    &:hover,
    &:focus-visible {
      color: var(--light-cta);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--light-cta) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--light-cta);
      opacity: 0.7;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: var(--light-cta);
    background-color: transparent;
    border: 1px solid var(--light-cta);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-title);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--light-cta);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--light-contrast);
    background-color: var(--light-text);
    border: 1.5px solid var(--light-cta);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-title);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--light-cta);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--light-cta);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--light-cta);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
