import React, { createContext, useContext, useState } from 'react'
import { AppContext, apiData } from '../types/types'

const defaultGlobalAppState = {
  defaultCardsData: [],
  cardsDisplayed: [],
  sortBy: 'name',
  isAscendingOrder: true,
  searchInput: '',
  setDefaultCardsData: () => console.log('must be used within AppContextProvider'),
  setCardsDisplayed: () => console.log('must be used within AppContextProvider'),
  setSortBy: () => console.log('must be used within AppContextProvider'),
  setIsAscendingOrder: () => console.log('must be used within AppContextProvider'),
  setSearchInput: () => console.log('must be used within AppContextProvider'),

}

const GlobalAppContext = createContext<AppContext>(defaultGlobalAppState)

type Props = {
  children: React.ReactNode;
}

export const useAppContext = () => {
  const context = useContext<AppContext>(GlobalAppContext)
  if (context === undefined || context === null) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
};

export const AppContextProvider = ({ children }: Props) => {
  const [cardsDisplayed, setCardsDisplayed] = useState<apiData[]>([])
  const [defaultCardsData, setDefaultCardsData] = useState<apiData[]>([])
  const [sortBy, setSortBy] = useState<string>('name')
  const [isAscendingOrder, setIsAscendingOrder] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  return <GlobalAppContext.Provider value={{
    cardsDisplayed,
    setCardsDisplayed,
    defaultCardsData,
    setDefaultCardsData,
    sortBy,
    setSortBy,
    isAscendingOrder,
    setIsAscendingOrder,
    searchInput,
    setSearchInput
  }}
  >
    {children}
  </GlobalAppContext.Provider>
}