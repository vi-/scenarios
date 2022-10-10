import { useState, useEffect } from "react"
import { useAppContext } from "../../contexts/AppContext";
import { ReactComponent as SearchIcon } from "../../assets/svg/icon-search.svg"
import { SearchContainer } from './Search.styled'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
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

  useEffect(() => {
    handleSearchAction()
  }, [searchInput])

  return (
    <SearchContainer role="search">
      <div className="wrap">
        <label className="visually-hidden">Search</label>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInput}
        />
        <SearchIcon />
      </div>
    </SearchContainer>
  )
}

export default Search;