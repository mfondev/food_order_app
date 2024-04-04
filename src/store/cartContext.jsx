import { createContext } from 'react'
import { useState } from 'react'

export const cartContext = createContext({ cart: {} })

export default function CartContextProvider({ children }) {
  const [isCart, setIsCart] = useState([])

  function handleAddToCart(meal) {
    const existingMeal = isCart.find((item) => item.id === meal.id)

    if (existingMeal) {
      setIsCart((prevCart) =>
        prevCart.map((item) =>
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setIsCart((prevCart) => [...prevCart, { ...meal, quantity: 1 }])
    }
  }

  const contextValue = { isCart, handleAddToCart }

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  )
}
