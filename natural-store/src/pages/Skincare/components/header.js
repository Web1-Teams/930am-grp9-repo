import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {

return(

    <header classNameName="header">

        <div classNameName="nav-trail">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skincare">Skincare</Link></li>
        </ul>
        </div>

        <div classNameName="hero-section">
            <img classNameName="Skincare-img" src="/assets/Skin Care.png" alt="Skincare"/>
            <img classNameName="img0" src="/assets/Free_Cosmetic_Line_Mockup_1.png" alt="mockup"/>
        </div>

    </header>
)
}

export default Header;