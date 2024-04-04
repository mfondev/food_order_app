import './App.css'
import Cart from './components/Cart'
import Meals from './components/Meals'
import CartContextProvider from './store/cartContext'
import UserContextProvider from './store/userContext'

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
