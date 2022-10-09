import styled from "styled-components"
import { colours, easings, media } from '../../GlobalStyles'

const CardContainer = styled.div`
  background-color: ${colours.white};
  border-radius: 8px;
  border: 1px solid ${colours.borderGrey};
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 140px;
  box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.05);
  transition: box-shadow 0.35s ${easings.default};

  &:hover {
    box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.125);
  }

  ${media.md`
    min-height: 200px;
  `}

  h3 {
    font-size: 1rem;
  }

  .timestamp {
    margin-top: auto;
    display: flex;
    margin-bottom: 8px;

    time {
      color: ${colours.midGrey}
    }

    svg {
      width: 12px;
      margin-right: 8px;
    }

    p {
      font-size: 0.85rem;
    }
  }

  .status {
    display: flex;
    align-items: center;
    font-size: 0.85rem;

    .status__text::first-letter {
      text-transform: capitalize;
    }

    .status__indicator {
      width: 8px;
      height: 8px;
      border-radius: 5px;
      background-color: ${colours.softGrey};
      display: inline-block;
      margin-right: 8px;
      border: 1px solid rgba(0,0,0,.15);
    }
  }

  .status--failed {
    .status__indicator {
      background-color: ${colours.signalFail}
    }
  }
  
  .status--unoptimised {
    .status__indicator {
      background-color: ${colours.signalWarn}
    }
  }
  
  .status--optimised {
    .status__indicator {
      background-color: ${colours.signalPass}
    }
  }

`

export { CardContainer };