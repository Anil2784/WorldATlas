import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Country from './components/Country'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import CountryDetails from './components/countryDetails';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country" element={<Country />} />

            <Route
              path="/countryDetails/:countryName"
              element={<CountryDetails />}
            />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
