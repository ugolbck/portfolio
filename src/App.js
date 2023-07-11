import './App.css';
import NavBar from './components/navbar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import LandingBloc from './components/body/LandingBloc';
import AboutBloc from './components/body/AboutBloc';
import React, { useRef } from 'react'
import "@fontsource/poppins";

function App() {
  const aboutSectionRef = useRef();

  return (
    <div className='app'>
      <ScrollToTop />
      <NavBar sectionRefList={[aboutSectionRef]}/>

      <div className='body'>
            <div className="landing-bloc navbar-height">
                <LandingBloc sectionRefList={[aboutSectionRef]}/>
            </div>
            <AboutBloc ref={aboutSectionRef}/>
        </div>
    </div>
  );
}

export default App;
