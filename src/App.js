import './App.css';
import './Dark.css';
import Intro from './Intro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Top from './Component/Top';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/intro' element={<Intro/>}/>
      </Routes>
    </BrowserRouter>
         
  );
}

export default App;
