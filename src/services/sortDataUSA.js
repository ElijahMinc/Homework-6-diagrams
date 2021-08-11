export const sortDataUSA = (datausa, selectValue, valueSorting) => {
   const dataUSAFilter = datausa.filter(dataUsa => dataUsa[valueSorting] === selectValue)
   return dataUSAFilter
}

export const sortDataUSAForYear = (dataUSA, valueSorting, valueYear) => {
   const dataUSAFilter = dataUSA.filter(dataUSA => dataUSA[valueSorting] === valueYear)
   return { dataUSAFilter }
}