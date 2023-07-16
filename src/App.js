import './App.css';
import ScrollToTop from './components/ScrollToTop';
import LandingBloc from './components/body/LandingBloc';
import AboutBloc from './components/body/about/AboutBloc';
import React, {useRef} from 'react'
import "@fontsource/poppins";

function App() {
  const aboutSectionRef = useRef();
  const contactSectionRef = useRef();  // to add to the contact section below the about section

  return (
    <div className='app'>
      <ScrollToTop />

      <LandingBloc sectionRefList={[aboutSectionRef]}/>
      <AboutBloc ref={aboutSectionRef}/>
    </div>
  );
}

export default App;
