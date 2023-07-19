import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'

import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
import NoPage from './components/NoPage';


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
