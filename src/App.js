import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Membri from './pages/Membri';
import Discografie from './pages/Discografie';
import Curiozitati from './pages/Curiozitati';
import Concerte from './pages/Concerte';
import GalerieFoto from './pages/GalerieFoto';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Membri/>} />
        <Route path='/discografie' element={<Discografie/>} />
        <Route path='/curiozitati' element={<Curiozitati/>} />
        <Route path='/galerie' element={<GalerieFoto/>} />
        <Route path='/concerte' element={<Concerte/>} />
      </Routes>
      <Footer  />  
    </Router>
    </>
  );
}

export default App;
