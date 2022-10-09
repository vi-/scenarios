import { AppContextProvider } from "./contexts/AppContext";
import Scenarios from './components/Scenarios/Scenarios';
import { TopbarContainer } from './components/Topbar/Topbar.styled'
import Sort from './components/Sort/Sort'
import Search from './components/Search/Search'

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <TopbarContainer>
          <Sort />
          <Search />
        </TopbarContainer>
        <Scenarios />
      </div>
    </AppContextProvider>
  );
}

export default App;
