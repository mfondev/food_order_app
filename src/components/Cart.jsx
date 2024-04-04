import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import { cartContext } from '../store/cartContext'
import { currencyFormatter } from '../util/formatter'
import Button from '../UI/Button'
import { userContext } from '../store/userContext'

export default function () {
  const { isCart: cart, getSubTotal } = useContext(cartContext)
  const { userProgress } = useContext(userContext)

  // function handleShowCart() {
  //   showCart()
  // }
  return (
    <Modal className='cart' open={userProgress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          )
        })}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(getSubTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  )
}
