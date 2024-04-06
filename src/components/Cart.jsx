import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import { cartContext } from '../store/cartContext'
import { currencyFormatter } from '../util/formatter'
import Button from '../UI/Button'
import { userContext } from '../store/userContext'
import CartItem from './CartItem'

export default function () {
  const { isCart: cart, addToCart, removeFromCart,reduceQuantity } = useContext(cartContext)
  const { userProgress, hideCart } = useContext(userContext)

  const cartTotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  function handlehideCart() {
    hideCart()
  }
  return (
    <Modal className='cart' open={userProgress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => {
          return (
            // <li key={item.id}>
            //   {item.name} - {item.quantity}
            // </li>
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => addToCart(item)}
              onDecrease={() => reduceQuantity(item)}
            />
          )
        })}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handlehideCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  )
}
