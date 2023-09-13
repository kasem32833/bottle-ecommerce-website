import { useState } from 'react'
import Products from './components/Products/Products'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='name'>
        <Products></Products>
      </div>
      
    </>
  )
}

export default App
