import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HomeScreen } from './components/pages/Home/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='justify-center h-screen '>
      <HomeScreen/>
    </div>
   
  )
}

export default App
