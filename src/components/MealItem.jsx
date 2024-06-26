import React, { useState, useContext } from 'react'
import { currencyFormatter } from '../util/formatter'
import Button from '../UI/Button'
import { cartContext } from '../store/cartContext'

export default function MealItem({ meal }) {
  const { isCart, addToCart } = useContext(cartContext)

  return (
    <li className='meal-item'>
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className='meal-item-price'>
            {' '}
            {currencyFormatter.format(meal.price)}
          </p>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-items-actions'>
          <Button onClick={() => addToCart(meal)}>add to cart</Button>
        </p>
      </article>
    </li>
  )
}
