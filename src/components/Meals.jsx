import React from 'react'
import useFetch from '../hooks/useFetch'
import MealItem from './MealItem'
import Button from '../UI/Button'
import { useContext } from 'react'
import { cartContext } from '../store/cartContext'

export default function Meals() {
  const { isCart } = useContext(cartContext)
  const { meals, error } = useFetch()
  return (
    <>
      <div id='main-header'>
        <h1>What to eat Today </h1>
        <Button textOnly>Cart({isCart.length})</Button>
      </div>
      <div id='meals'>
        {meals
          ? meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
          : ''}
      </div>
    </>
  )
}
