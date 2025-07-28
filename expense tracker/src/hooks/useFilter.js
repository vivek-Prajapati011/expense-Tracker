import React, { useState } from 'react'

function useFilter(data, callback) {
    const[query, setQuery] = useState('')
    const filterData = data.filter((el) => {
    return el .category.toLowerCase().include(category)
  }) 
  return [filterData,setQuery]
}

export default useFilter
