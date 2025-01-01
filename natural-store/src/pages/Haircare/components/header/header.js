import React from 'react';
import './header.css';

const Header = () => {

return(

    <header className="header">
        
    <br/>
    <div className="nav-trail">
        <a className="nav-trail-1" href="Home.html">Home  </a><b> Haircare</b>
        <hr/>
    </div>
   
    <div className="interface-section">
        <img className="haircare-img" src="Haircare.png" alt="supplement"/>
        <img className="img0" src="3creams.png" alt="pill_jar_mockup"/>
    </div>
    
</header>
)
};

export default Header;