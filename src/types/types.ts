export type apiData = {
  name: string;
  id: number;
  created: string;
  status: "results optimised" | "unoptimised" | "failed";
}

export type AppContext = {
  defaultCardsData: Array<apiData>
  setDefaultCardsData: (cardsDisplayed: Array<apiData> | []) => void
  cardsDisplayed: Array<apiData>
  setCardsDisplayed: (cardsDisplayed: Array<apiData> | []) => void
  sortBy: string
  setSortBy: (sortBy: string) => void
  isAscendingOrder: boolean
  setIsAscendingOrder: (isAscendingOrder: boolean) => void
  searchInput: string
  setSearchInput: (isAscendingOrder: string) => void
}