import { useState, useRef, useEffect } from "react"
import { NewScenarioContainer } from './NewScenario.style'
import { useAppContext } from "../../contexts/AppContext"
import { apiData } from "../../types/types"
import { sortArrayOfObjects } from "../../utils/utils"

const NewScenario = () => {
  const [newScenarioUiVisible, setNewScenarioUiVisible] = useState(false)
  const [newScenarioName, setNewScenarioName] = useState('')
  const { cardsDisplayed, setCardsDisplayed, setDefaultCardsData, defaultCardsData, sortBy, isAscendingOrder, setSearchInput } = useAppContext()
  const newScenarioInputRef = useRef<HTMLInputElement>(null);

  const handleNewScenarioClick = () => {
    setNewScenarioUiVisible(true)
  }

  const handleNewScenarioInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewScenarioName(evt.target.value)
  }

  const handleNewScenarioCreate = () => {
    if (newScenarioName) {
      const date = new Date()
      const created = date.toISOString()
      const id = date.getTime()
      const newCard: apiData = {
        name: newScenarioName,
        id,
        created,
        status: 'unoptimised'
      }
      setSearchInput('')
      setDefaultCardsData(sortArrayOfObjects([...defaultCardsData, newCard], sortBy, isAscendingOrder))
      setCardsDisplayed(sortArrayOfObjects([...cardsDisplayed, newCard], sortBy, isAscendingOrder))
      setNewScenarioName('')
      setNewScenarioUiVisible(false)
    }
  }

  const handleInputEnter = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      handleNewScenarioCreate()
    }
  }

  const handleCancel = () => {
    setNewScenarioUiVisible(false)
    setNewScenarioName('')
    console.log()
  }

  useEffect(() => {
    newScenarioInputRef?.current?.focus()
  }, [newScenarioUiVisible])

  return (
    <NewScenarioContainer>
      <button
        className="new-scenario__button"
        title="New Scenario"
        onClick={handleNewScenarioClick}
      >
        <span>+</span>New scenario
      </button>
      <div className={`new-scenario__ui ${newScenarioUiVisible && 'is-visible'}`}>
        <div className="wrap">
          <input
            type="text"
            placeholder='Name scenario'
            value={newScenarioName}
            onChange={handleNewScenarioInput}
            onKeyDown={handleInputEnter}
            ref={newScenarioInputRef}
          />
          <button className="btn btn--create" onClick={handleNewScenarioCreate}>Create</button>
          <button className="btn btn--cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </NewScenarioContainer>
  )
}


export default NewScenario;