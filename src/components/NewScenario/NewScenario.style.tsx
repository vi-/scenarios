import styled from "styled-components"
import { colours, easings } from '../../GlobalStyles'

const NewScenarioContainer = styled.div`
  position: relative;

  .new-scenario__button {
    width: 100%;
    height: 100%;
    min-height: 140px;
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
      box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.2);
    }
  }

  .new-scenario__ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: #fff;
    visibility: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${colours.borderGrey};

    &.is-visible {
      visibility: visible;
    }

    .wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    input {
      width: 100%;
      border: 1px solid ${colours.borderGrey};
      border-radius: 4px;
      padding: 4px 8px;
      margin-bottom: 8px;
    }
  }

  .btn--create {
    border: none;
    border-radius: 4px;
    padding: 2px 16px;
    color: ${colours.white};
    background-color: ${colours.signalPass};
    cursor: pointer;
    position: absolute;
    top: 3px;
    right: 3px;

    &:hover {
      opacity: 0.9;
    }
  }
`

export { NewScenarioContainer }