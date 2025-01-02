import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

return(

    <header classNameName="header">
        
    
    <div classNameName="nav-trail">
                  <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/haircare">Haircare</Link></li>
                  </ul>

    </div>
   
    <div classNameName="interface-section">
        <img classNameName="haircare-img" src="/assets/HaircareHeaderimg.png" alt="haircare"/>
        <img classNameName="img0" src="/assets/HaircareHeaderimg.png" alt="haircaremockup"/>
    </div>
    
</header>
)
};

export default Header;