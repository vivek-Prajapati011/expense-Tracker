import { useEffect, useState } from "react";

import React from 'react'

function useLocalStorage(key, initialvalue) {
    const[data,setData] = useState(initialvalue)
    const existingData = JSON.parse(localStorage.getItem(key))

  useEffect(() =>{
      if(existingData){
      setData(existingData)
    }else{
      localStorage.setItem(key, JSON.stringify(initialvalue))
    }
  },[])

    const updateLocalStorage = (newData) => {
    if (typeof newData === 'function') {
      localStorage.setItem(key, JSON.stringify(newData(data)))
    } else {
      localStorage.setItem(key, JSON.stringify(newData))
    }
    setData(newData)
  }

  return [data, updateLocalStorage]
}

export default useLocalStorage

