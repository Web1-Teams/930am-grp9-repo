import React from 'react';
import './header.css';

const Header = () => {

return(

    <header className='header'>
        <div class="circle-button">
          <img src="/assets/Path 21.png" alt="Arrow Icon"/>
             </div>
        <img src="/assets/logoHeader.png" className="header-logo"/>

<p className='para'>At Natural Store, we are committed to providing you with the finest all- <br/>
natural products for a healthier and more vibrant lifestyle. From our  <br/>
exclusive range of skin care, hair care, and supplements to carefully  <br/>
curated partner products, we ensure everything meets our high <br/>
standards of quality and sustainability.<br/>
</p>




<img src="/assets/s.png" className="letter"/>
<img src="/assets/jar.png" className="jar"/>
<img src="/assets/alov1.png" className="alovira1"/>
<img src="/assets/alov2.png" className="alovira2"/>
<img src="/assets/alov3.png" className="alovira3"/>



<button className="shop-slowly-button">SHOP SLOWLY</button>
<span className="ns">%100 NATURAL SOURCES</span>


</header>
)
}

export default Header;