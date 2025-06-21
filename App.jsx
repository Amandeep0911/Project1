import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Register from './Pages/Registration';

const App = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='registration' element={<Register />} />
      </Routes>
    </div>
  )
};

export default App;
