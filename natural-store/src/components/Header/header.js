import React from 'react';
import './header.css';

const Header = () => {

return(

    <header className='header'>
<img src="Group 5.png" className="photo"/>
<p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/>
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br/>
    laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et <br/>
    cornmodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. <br/>
    Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec <br/>
    lobortis risus a elit. Etiam tempor. Ut ullarncorper, ligula eu tempor congue, eros est euismod <br/>
    turpis, id tincidunt sapien risus a quam.
    
</p>



<img src="a letter2.png" className="letter"/>
<img src="cream.png" className="cream"/>
<img src="alovira.png" className="alovira1"/>
<img src="alovira.png" className="alovira2"/>
<img src="alovira.png" className="alovira3"/>

<button className="cobtn">Shop Slowly</button>
<button className="right" ><i className='fas fa-hand-point-right'></i></button>
<button className="left"><i className='fas fa-hand-point-left'></i></button>
</header>
)
}

export default Header;