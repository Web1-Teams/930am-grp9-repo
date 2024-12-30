import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

return (


    
    <nav className="nav-bar">
      

        <div className="pages">    
            <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skincare">Skincare</Link></li>
          <li><Link to="/haircare">Haircare</Link></li>
          <li><Link to="/supplements">Supplements</Link></li>
          </ul>
        
        </div>    
        
        <div className="search">

            <button>
            <img src="/assets/search.png" alt="search-icon"/>
            </button>

            <input type="search" placeholder="search..."/>
        </div>

    </nav>



);

};

export default NavBar;