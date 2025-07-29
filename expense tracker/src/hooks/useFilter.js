import React, { useState } from 'react'

function useFilter(dataList, callback) {
    const[query, setQuery] = useState('')
    const filterData = dataList.filter((data) => {
    return data.category.toLowerCase().includes(query)
  }) 
  return [filterData,setQuery]
}

export default useFilter
