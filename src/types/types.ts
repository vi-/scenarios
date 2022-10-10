export type apiData = {
  name: string;
  id: number;
  created: string;
  status: "results optimised" | "unoptimised" | "failed";
}

export type AppContext = {
  defaultCardsData: Array<apiData>
  setDefaultCardsData: (cardsDisplayed: Array<apiData>) => void
  cardsDisplayed: Array<apiData>
  setCardsDisplayed: (cardsDisplayed: Array<apiData>) => void
  searchInput: string
  setSearchInput: (cardsDisplayed: string) => void
}