import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Collections"
import Custom from "./pages/Custom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"
import axios from "axios"
import { IUser } from "./interface/users"
import SingleProduct from "./components/SingleProduct"


function App() {
  const [user, setUser] = useState<null | IUser>(null)

  async function fetchUser() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get('/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setUser(data)
  }


  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:_id" element={<SingleProduct />}/>
          <Route path="/custom" element={<Custom />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login fetchUser={fetchUser}/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer style={{marginTop: '45vh'}}>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
