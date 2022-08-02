import React, { createContext, useState } from 'react'

export const InputContext = createContext()
export const InputProvider = ({children}) => {
  const[input , setInput] = useState(null)
  const [ready , setReady] = useState(0)
  return (
    <InputContext.Provider value={{input , setInput , ready , setReady}}>
      {children}
    </InputContext.Provider>
  )
}

