import styled from "styled-components"
import { colours, media } from '../../GlobalStyles'

const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  
  ${media.md`
    width: 50%;
    max-width: 320px;
  `}

  input {
    border: 1px solid ${colours.borderGrey};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 4px 8px;
    font-size: 0.9rem;
    flex: 1 0 auto;
  }

  button {
    position: relative;
    left: -1px;
    background-color: ${colours.white};
    border: 1px solid ${colours.borderGrey};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover {
      cursor: pointer;
      background-color: ${colours.softGrey};
    }

    &:active {
      background-color: ${colours.borderGrey};
    }

    &[disabled] {
      &:hover {
        background-color: ${colours.white};
        cursor: not-allowed;
      }
    }

    svg {
      width: 80%;
      height: auto;
      padding: 8px;
    }
  }
`;

export { SearchContainer }