import { ScenariosContainer } from './Scenarios.styled'
import { useAppContext } from "../../contexts/AppContext"
import NewScenario from "../NewScenario/NewScenario"
import Card from '../Card/Card'

const Scenarios = () => {
  const { cardsDisplayed } = useAppContext()

  return (
    <ScenariosContainer>
      {cardsDisplayed.length > 0 && (
        <NewScenario />
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