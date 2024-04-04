import { createContext, useReducer } from 'react'
import { useState } from 'react'

export const cartContext = createContext({
  iscart: [],
  addToCart: (meal) => {},
  removeFromCart: (id) => {},
})

export default function CartContextProvider({ children }) {
  const [isCart, setIsCart] = useState([])
  function addToCart(meal) {
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

  function removeFromCart(mealId) {
    const existingMealIndex = isCart.findIndex((item) => item.id === mealId)

    if (existingMealIndex !== -1) {
      setIsCart((prevCart) => {
        const updatedCart = [...prevCart]
        updatedCart.splice(existingMealIndex, 1)
        return updatedCart
      })
    }
  }

  console.log(isCart)
  const contextValue = { isCart, addToCart, removeFromCart }
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  )
}
