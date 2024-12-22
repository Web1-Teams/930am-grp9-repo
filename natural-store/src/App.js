import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/header';
import BestSellers from './components/BestSellers/BestSellers';
import Footer from './components/Footer/footer';


function App() {
  return (
   <div className="App">

    <NavBar />
   <Header/>
    <BestSellers />
    <Footer/>
   </div>
  );
}

export default App;
