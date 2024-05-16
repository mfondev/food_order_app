import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import { cartContext } from '../store/cartContext'
import { currencyFormatter } from '../util/formatter'
import { userContext } from '../store/userContext'
import Input from './Input'
import Button from '../UI/Button'

export default function () {
  const [isSubmit, setIsSubmit] = useState(false)
  const { isCart: cart, clearCart } = useContext(cartContext)
  const {
    userProgress,
    hideCheckout,
    // showCheckout,
  } = useContext(userContext)

  function handlehideCheckout() {
    hideCheckout()
  }

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const customerData = Object.fromEntries(fd.entries()) // to get all input data

    console.log(customerData)
    setIsSubmit(true)
  }

  function handleFinish() {
    handlehideCheckout()
    clearCart()
  }
  const cartTotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  if (isSubmit) {
    return (
      <Modal open={userProgress === 'checkout'} onClose={handlehideCheckout}>
        <h2>Success!</h2>
        <p>Thank you for your order!</p>
        <p>We will reach out to you via email shortly.</p>
        <p className='modal-actions'>
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    )
  }
  return (
    <Modal open={userProgress === 'checkout'}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label='Fullname' type='text' id='full-name' />
        <Input label='E-mail' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='Postal code' type='text' id='postal-code' />
          <Input label='City' type='text' id='city' />
        </div>
        <p className='modal-actions'>
          <Button type='button' textOnly onClick={handlehideCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  )
}
