import React from 'react'
// import useFetch from '../hooks/useFetch'
import useFetch from '../hooks/useFetch'
import MealItem from './MealItem'

export default function Meals() {
  const { meals, error } = useFetch()
  // console.log(meals);
  return (
    <>
      <div>
        <h1>What to eat Today </h1>
      </div>
      <div id='meals'>
        {meals
          ? meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
          : ''}
      </div>
    </>
  )
}
