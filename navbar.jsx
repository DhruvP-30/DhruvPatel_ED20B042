
import React from'react';

import './navbar.css';

function Navbar(){
    return(
        <div className='NavbarItems'>
            
            <h1 className='navbar-logo'>SPORTY</h1>
            <h2 className='nav-links1' href='#'>Home</h2>
            <h2 className='nav-links2' href='#'>Achivements</h2>
            <h2 className='nav-links3' href='#'>Players</h2>
            <h2 className='nav-links4' href='#'>Community</h2>
            <h2 className='nav-links5' href='#'>Contact Us</h2>
            <h2 className='nav-links6' href='#'>Search</h2>
            
            
        </div>
    );
}

export default Navbar;