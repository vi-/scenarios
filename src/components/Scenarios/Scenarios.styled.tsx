import styled from "styled-components"
import { colours, media, easings } from '../../GlobalStyles'

const ScenariosContainer = styled.main`
  background-color: ${colours.softGrey};
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 16px;

  .new-scenario {
    position: relative;
  }

  .new-scenario__button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colours.white};
    border-radius: 8px;
    border: 1px dashed ${colours.borderGrey};
    box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.05);
    transition: box-shadow 0.35s ${easings.default};
    color: ${colours.midGrey};

    &:hover {
      box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.125);
    }
  }

  .new-scenario__ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    visibility: hidden;

    &.is-visible {
      visibility: visible;
    }
  }

  .no-results {
    background-color: ${colours.white};
    padding: 25px;
    grid-column: 2 / span 1;
    border-radius: 8px;
    border: 1px solid ${colours.borderGrey};
  }

  ${media.md`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.lg`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.xl`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `}
`

export { ScenariosContainer };