import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './compornent/Header'
import Home from './compornent/Home'
import Coins from './compornent/Coins'
import Exchanges from './compornent/Exchanges'
import CoinDetails from './compornent/CoinDetails'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
      <Route path='/coin/:id' element={<CoinDetails/>}/>
    </Routes>
    </>
  )
}

export default App
