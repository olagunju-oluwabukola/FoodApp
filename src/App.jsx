import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import HeadlineCards from './HeadlineCards'
import Food from './Food'
import Category from './Category'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
   
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Food/>
    <Category/>
      </div>
     
    </>
  )
}

export default App
