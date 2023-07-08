import './App.css';
import NavBar from './components/navbar/NavBar';
import Body from './components/body/Body';
import ScrollToTop from './components/ScrollToTop';
import React, { useRef } from 'react'
import "@fontsource/poppins";

function App() {
  const aboutSection = useRef(null)

  return (
    <div className='app'>
      <ScrollToTop />
      <NavBar/>
      <Body/>
    </div>
  );
}

export default App;
