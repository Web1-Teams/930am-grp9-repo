import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/global.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import Skincare from './pages/Skincare/Skincare';
import Haircare from './pages/Haircare/Haircare';
import Supplements from './pages/Supplements/Supplements';


function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/haircare" element={<Haircare />} />
      <Route path="/supplements" element={<Supplements />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
