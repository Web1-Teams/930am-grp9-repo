import React from 'react';
import './header.css';

const Header = () => {

return(

    <header className="header">
        
        <br/>
        <div className="nav-trail">
            <a className="nav-trail-1" href="Home.html">Home </a><b> Supplements</b>
            <hr/>
        </div>
       
        <div className="hero-section">
            <img className="supplement-img" src="Supplements.png" alt="supplement"/>
            <img className="img0" src="/omega-3 fish oil.png" alt="pill_jar_mockup"/>
        </div>
        
    </header>
)
}

export default Header;




