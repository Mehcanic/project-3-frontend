import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Custom from "./pages/Custom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
