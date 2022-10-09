import { useState, useEffect } from "react"
import { useAppContext } from "../../contexts/AppContext";
import { ReactComponent as AscendingIcon } from "../../assets/svg/icon-ascending.svg"
import { SortContainer } from './Sort.styled'

const Sort = () => {
  const [isAscendingOrder, setIsAscendingOrder] = useState(true)
  const { cardsDisplayed, setCardsDisplayed } = useAppContext()

  const sortByParam = (param: string) => {
    const sortedArray = [...cardsDisplayed].sort((a: any, b: any) => {
      if (a[param] < b[param]) {
        return -1
      }
      if (a[param] > b[param]) {
        return 1
      }
      return 0
    })
    return isAscendingOrder ? sortedArray : sortedArray.reverse()
  }

  const handleSortChange = (evt: any) => {
    const sortedArray = sortByParam(evt.target.value)
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