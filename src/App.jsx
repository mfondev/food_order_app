import './App.css'
import Meals from './components/Meals'
import CartContextProvider from './store/cartContext'

function App() {
  return (
    <CartContextProvider>
      <Meals />
    </CartContextProvider>
  )
}

export default App
