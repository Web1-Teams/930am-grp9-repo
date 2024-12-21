import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/header';
import BestSellers from './components/BestSellers/BestSellers';


function App() {
  return (
   <div className="App">

    <NavBar />
   <Header/>
    <BestSellers />

   </div>
  );
}

export default App;
