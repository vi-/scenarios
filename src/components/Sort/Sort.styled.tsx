import styled from "styled-components"
import { colours, media } from '../../GlobalStyles'

const SortContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  margin-right: auto;

  select, option {
    width: 100%;
    border: none;
    padding: 0 8px;
    font-size: 0.9rem;
  }

  .sort-order {
    appearance: none;
    border: none;
    background-color: transparent;
    flex: 1 0 auto;
    margin-left: 24px;
    padding: 0;
    color: ${colours.midGrey};
  }

  .sort-order--descending {
    transform: scale(1, -1);
  }

  svg {
    width: 18px;
    height: auto;
  }
  
  ${media.md`
    max-width: 200px;
  `}
`;

export { SortContainer }