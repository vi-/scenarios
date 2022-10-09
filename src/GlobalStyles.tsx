import { createGlobalStyle, css } from "styled-components";

const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200
}

export const colours = {
  white: `#FFFFFF`,
  softGrey: `#F7F7F9`,
  borderGrey: `#E9E9EB`,
  midGrey: `#9C9C9C`,
  darkGrey: `#333333`,
  signalFail: `#E33428`,
  signalWarn: `#DCB94D`,
  signalPass: `#354FE5`,
}

export const easings = {
  elastic: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
  default: `cubic-bezier(0.25, 0.01, 0.25, 1)`
}

export const media = (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce((acc, breakpoint) => {
  acc[breakpoint] = (...args: string[]) => {
    return css`
      @media (min-width: ${breakpoints[breakpoint]}px) {
        ${// @ts-ignore
      css(...args)};
      }
    `
  }
  return acc
}, {} as { [index: string]: Function })

export const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class=":not(row)"],
  ol[class=":not(row)"],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: sans-serif;
    color: ${colours.darkGrey};
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Make images easier to work with */
  img, svg {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select,
  option {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .visually-hidden {
    position: absolute !important;
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
  }
`;


