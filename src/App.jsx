import './App.css'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Meals from './components/Meals'
import CartContextProvider from './store/cartContext'
import UserContextProvider from './store/userContext'

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
