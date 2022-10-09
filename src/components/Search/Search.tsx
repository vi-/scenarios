import { useState, useEffect } from "react"
import { useAppContext } from "../../contexts/AppContext";
import { ReactComponent as SearchIcon } from "../../assets/svg/icon-search.svg"
import { SearchContainer } from './Search.styled'

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const { defaultCardsData, setCardsDisplayed } = useAppContext()

  const handleSearchAction = () => {
    const scenarios = [...defaultCardsData].filter(
      sceanrio => sceanrio.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    )
    setCardsDisplayed(scenarios)
  }

  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value)
  }

  const handleSearchEnter = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      handleSearchAction()
    }
  }

  const handleSearchClick = () => {
    handleSearchAction()
  }

  useEffect(() => {
    if (searchInput === '') setCardsDisplayed(defaultCardsData)
  }, [defaultCardsData, searchInput, setCardsDisplayed])

  return (
    <SearchContainer role="search">
      <label className="visually-hidden">Search</label>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchInput}
        onKeyDown={handleSearchEnter}
      />
      <button
        value="search"
        // disabled={searchInput.length === 0}
        onClick={handleSearchClick}
      >
        <SearchIcon /><span className="visually-hidden">Search</span>
      </button>
    </SearchContainer>
  )
}

export default Search;