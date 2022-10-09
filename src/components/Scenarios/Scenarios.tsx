import { useState } from "react"
import { ScenariosContainer } from './Scenarios.styled';
import { useAppContext } from "../../contexts/AppContext";
import Card from '../Card/Card'
import { apiData } from "../../types/types";

const Scenarios = () => {
  const [newScenarioUiVisible, setNewScenarioUiVisible] = useState(false);
  const [newScenarioName, setNewScenarioName] = useState('');
  const { cardsDisplayed, setCardsDisplayed } = useAppContext();

  const handleNewScenarioInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewScenarioName(evt.target.value);
  }

  const handleNewScenarioCreate = () => {
    if (newScenarioName) {
      const date = new Date();
      const created = date.toISOString();
      const id = date.getTime();
      const newCard: apiData = {
        name: newScenarioName,
        id,
        created,
        status: 'unoptimised'
      }
      setCardsDisplayed([...cardsDisplayed, newCard]);
      setNewScenarioUiVisible(false);
      // console.log(`need to create ${newCard}`)
    }
  }

  return (
    <ScenariosContainer>
      {cardsDisplayed.length > 0 && (
        <div className='new-scenario'>
          <button
            className="new-scenario__button"
            title="New Scenario"
            onClick={() => setNewScenarioUiVisible(true)}
          >
            <span>+</span>New scenario
          </button>
          <div className={`new-scenario__ui ${newScenarioUiVisible && 'is-visible'}`}>
            <input
              type="text"
              placeholder='Name scenario'
              onChange={handleNewScenarioInput}
            />
            <button onClick={handleNewScenarioCreate}>Create</button>
            <button onClick={() => setNewScenarioUiVisible(false)}>Cancel</button>
          </div>
        </div>
      )}
      {cardsDisplayed.length > 0
        ? cardsDisplayed.map(({ name, id, created, status }) => (
          <Card title={name} timestamp={created} status={status} key={id} />
        )) : <div className="no-results"><p>Sorry, no cards found mathing your query</p></div>
      }
    </ScenariosContainer>
  )
}

export default Scenarios;