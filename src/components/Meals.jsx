import React from 'react'
import useFetch from '../hooks/useFetch'
import MealItem from './MealItem'
import Button from '../UI/Button'
import { useContext } from 'react'
import { cartContext } from '../store/cartContext'
import { userContext } from '../store/userContext'

export default function Meals() {
  const { isCart } = useContext(cartContext)
  const { showCart } = useContext(userContext)
  const { meals, error, isLoading } = useFetch()

  function handleShowCart() {
    showCart()
  }

  // if(isLoading) {
  //     return <p className='center'>Fetching meals...</p>
  //   }

  if (error) {
    return <p className='center'>Failed to fetch</p>
  }
  return (
    <>
      <div id='main-header'>
        <h1>What to eat Today </h1>
        <Button textOnly onClick={handleShowCart}>
          Cart({isCart.length})
        </Button>
      </div>
      <div>
        {isLoading ? (
          <p className='center'>Fetching meals...</p>
        ) : (
          <div id='meals'>
            {meals
              ? meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
              : ''}
          </div>
        )}
      </div>
      {/* <div id='meals'>
        {meals
          ? meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
          : ''}
      </div> */}
    </>
  )
}
