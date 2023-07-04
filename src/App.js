import './App.css';
import NavBar from './components/navbar/NavBar';
import Body from './components/body/Body';

import "@fontsource/poppins";

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='body'>
        <Body />
      </div>
    </div>
  );
}

export default App;
