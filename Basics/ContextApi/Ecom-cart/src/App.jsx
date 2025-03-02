import { useState } from 'react'
import Items from './Components/Items'
import Cart from './Components/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Items name="macbook" price={50000} />
 <Items name="macbook-pro" price={150000}/>
 <Items name="Mac-mini" price={60000}/>
 <Items name="Iphone-17" price={120000}/>
 <br />
 <Cart/>
 </>
  )
}

export default App
