import React, { createContext, useContext, useState } from 'react'
import { apiData, AppContext } from '../types/types'

const dummyApiData: Array<apiData> = [
  {
    name: 'Scenario',
    id: 1,
    created: '2022-01-01T11:00:00',
    status: 'failed'
  },
  {
    name: 'Scenario 1',
    id: 2,
    created: '2022-04-10T11:00:00',
    status: 'results optimised'
  },
  {
    name: 'Scenario 2',
    id: 4,
    created: '2022-05-15T11:32:00',
    status: 'failed'
  },
  {
    name: 'Scenario Name',
    id: 5,
    created: '2022-05-03T21:11:00',
    status: 'results optimised'
  },
  {
    name: 'Scenario New',
    id: 6,
    created: '2022-10-08T21:11:00',
    status: 'unoptimised'
  }
]

const defaultGlobalAppState = {
  defaultCardsData: dummyApiData,
  cardsDisplayed: dummyApiData,
  setDefaultCardsData: () => console.log('must be used within AppContextProvide'),
  setCardsDisplayed: () => console.log('must be used within AppContextProvide'),
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
  const [cardsDisplayed, setCardsDisplayed] = useState(dummyApiData)
  const [defaultCardsData, setDefaultCardsData] = useState(dummyApiData)

  return <GlobalAppContext.Provider value={{
    cardsDisplayed,
    setCardsDisplayed,
    defaultCardsData,
    setDefaultCardsData
  }}
  >
    {children}
  </GlobalAppContext.Provider>
}