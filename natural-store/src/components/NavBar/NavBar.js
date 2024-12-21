import React from 'react';
import './NavBar.css';

const NavBar = () => {

return (


    
    <nav className="nav-bar">
        <img src="national store.png" alt="logo national store"/>
        
        <div className="pages">    
            <a href="Skincare.html">Skincare</a>
            <a href="Haircare.html">Haircare</a>
            <a href="Supplements.html">Supplements</a>
            <a href="Health.html">Health</a>
        </div>    
        
        <div class="search"> 
            <button>
                <img src="search-icon.png" alt="search icon"/>
            </button>
            <input type="search" placeholder="Search..."/>
        </div>

    </nav>



)

}

export default NavBar;