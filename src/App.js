import './App.css';
import NavBar from './components/navbar/NavBar';
import Body from './components/body/Body';
import ScrollToTop from './components/ScrollToTop';

import "@fontsource/poppins";

function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <NavBar />
      <div className='body'>
        <Body />
      </div>
    </div>
  );
}

export default App;
