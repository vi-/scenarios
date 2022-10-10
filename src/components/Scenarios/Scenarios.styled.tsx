import styled from "styled-components"
import { colours, media } from '../../GlobalStyles'

const ScenariosContainer = styled.main`
  background-color: ${colours.softGrey};
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 16px;

  .no-results, .loading {
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