import { createContext, useState } from 'react'

export const userContext = createContext({})

export default function UserContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('')

  function showCart() {
    setUserProgress('cart')
  }

  function hideCart() {
    setUserProgress('')
  }

  function showCheckout() {
    setUserProgress('checkout')
  }
  function hideCheckout() {
    setUserProgress('')
  }

  const ctxvalue = {
    userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  }

  return (
    <userContext.Provider value={ctxvalue}>{children}</userContext.Provider>
  )
}
