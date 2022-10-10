import { useEffect } from 'react'
import { ScenariosContainer } from './Scenarios.styled'
import { useAppContext } from "../../contexts/AppContext"
import NewScenario from "../NewScenario/NewScenario"
import Card from '../Card/Card'
import useDummyData from '../../hooks/useDummyData'
import { sortArrayOfObjects } from '../../utils/utils'

const Scenarios = () => {
  const [loading, response, error] = useDummyData()
  const { cardsDisplayed, setCardsDisplayed, setDefaultCardsData, sortBy } = useAppContext()

  useEffect(() => {
    if (response) {
      const sortedArray = sortArrayOfObjects(response, sortBy)
      setDefaultCardsData(sortedArray)
      setCardsDisplayed(sortedArray)
    }
  }, [response])

  return (
    <ScenariosContainer>
      {loading && <div className="loading">Loading data...</div>}
      {error && <div className="error">Error occured...</div>}
      {response && (
        <>
          {cardsDisplayed.length > 0 && (<NewScenario />)}
          {cardsDisplayed.length > 0
            ? cardsDisplayed.map(({ name, id, created, status }) => (
              <Card title={name} timestamp={created} status={status} key={id} />
            )) : <div className="no-results"><p>Sorry, no cards found mathing your query</p></div>
          }
        </>
      )}
    </ScenariosContainer>
  )
}

export default Scenarios;