export const sortArrayOfObjects = (arrayToSort: any[], param: string, ascending: boolean = true) => {
  const sortedArray = [...arrayToSort].sort((a: any, b: any) => {
    if (a[param].toLowerCase() < b[param].toLowerCase()) {
      return -1
    }
    if (a[param].toLowerCase() > b[param].toLowerCase()) {
      return 1
    }
    return 0
  })
  return ascending ? sortedArray : sortedArray.reverse()
}