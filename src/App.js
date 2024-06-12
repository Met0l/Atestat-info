import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Membri from './pages/Membri';
import Discografie from './pages/Discografie';
import Tur from './pages/Tur';
import Noutati from './pages/Noutati';
import Media from './pages/Media';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Membri/>} />
        <Route path='/discografie' element={<Discografie/>} />
        <Route path='/tur' element={<Tur/>} />
        <Route path='/media' element={<Media/>} />
        <Route path='/noutati' element={<Noutati/>} />
      </Routes>
      <Footer  />  
    </Router>
    </>
  );
}

export default App;
