import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

function useFilter(dataList, callback) {
    const[query, setQuery] = useLocalStorage("query", "")
    const filterData = dataList.filter((data) => {
    return data.category.toLowerCase().includes(query)
  }) 
  return [filterData,setQuery]
}

export default useFilter
