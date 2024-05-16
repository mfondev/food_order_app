import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import { cartContext } from '../store/cartContext'
import { currencyFormatter } from '../util/formatter'
import Button from '../UI/Button'
import { userContext } from '../store/userContext'
import CartItem from './CartItem'

export default function () {
  const {
    isCart: cart,
    addToCart,
    removeFromCart,
    reduceQuantity,
  } = useContext(cartContext)
  const { userProgress, hideCart, showCheckout } = useContext(userContext)

  const cartTotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  function handlehideCart() {
    hideCart()
  }

  function handleShowCheckout() {
    showCheckout()
  }
  return (
    <Modal
      className='cart'
      open={userProgress === 'cart'}
      onClose={userProgress === 'cart' ? handlehideCart : null}
    >
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
              onDecrease={() => reduceQuantity(item.id)}
            />
          )
        })}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handlehideCart}>
          Close
        </Button>
        {cart.length > 0 ? (
          <Button onClick={handleShowCheckout}>Go to Checkout</Button>
        ) : (
          ''
        )}
      </p>
    </Modal>
  )
}
