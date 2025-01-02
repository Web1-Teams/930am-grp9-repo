import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {

return(

    <header classNameName="header">
        
        
        <div classNameName="nav-trail">
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/supplements">Skincare</Link></li>
        </ul> 
            
        </div>
       
        <div classNameName="hero-section">
            <img classNameName="supplement-img" src="/assets/Supplements.png" alt="supplement"/>
            <img classNameName="img0" src="/assets/pill_jar_mockup.png" alt="pill_jar_mockup"/>
        </div>
        
    </header>
)
}

export default Header;




