import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredit/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
