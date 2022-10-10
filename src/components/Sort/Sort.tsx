import { useEffect } from "react"
import { useAppContext } from "../../contexts/AppContext";
import { ReactComponent as AscendingIcon } from "../../assets/svg/icon-ascending.svg"
import { SortContainer } from './Sort.styled'
import { sortArrayOfObjects } from "../../utils/utils";

const Sort = () => {
  const { cardsDisplayed, setCardsDisplayed, setSortBy, isAscendingOrder, setIsAscendingOrder } = useAppContext()

  const handleSortChange = (evt: any) => {
    const sortedArray = sortArrayOfObjects(cardsDisplayed, evt.target.value, isAscendingOrder)
    setSortBy(evt.target.value)
    setCardsDisplayed(sortedArray)
  }

  const handleOrderChange = () => {
    setIsAscendingOrder(!isAscendingOrder)
  }

  useEffect(() => {
    const reOrderedArray = [...cardsDisplayed].reverse()
    setCardsDisplayed(reOrderedArray)
  }, [isAscendingOrder])

  return (
    <SortContainer>
      <select onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="created">Date</option>
        <option value="status">Status</option>
      </select>
      <button
        className={`sort-order ${!isAscendingOrder && 'sort-order--descending'}`}
        title={isAscendingOrder ? 'Order: Ascending' : 'Order: Descending'}
        onClick={handleOrderChange}
      >
        <AscendingIcon />
      </button>
    </SortContainer>
  )
}

export default Sort