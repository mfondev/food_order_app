import React from 'react'
import { currencyFormatter } from '../util/formatter'

export default function MealItem({meal}) {
  return (
    <li className='meal-item'>
     <article>
      <img src={meal.image} alt={meal.name} />
      <div>
       <h3>{meal.name}</h3>
       <p className='meal-item-price'>{meal.status}</p>
       <p className='meal-item-description'>{meal.species}</p>
      </div>
      <p className='meal-items-actions'>
       <button>add to cart</button>
      </p>
     </article>
    </li>
  )
}
