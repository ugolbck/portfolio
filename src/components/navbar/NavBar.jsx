import React from 'react';
import HomeButton from './TopLeftName.jsx';
import NavLinks from './Links.jsx';
import Available from './Available.jsx';

export default function NavBar() {
    return (
        <div className="nav-bar navbar-height">
            <HomeButton />
            <div className='nav-bar-right-items'>
                <Available />
                <NavLinks />
            </div>
        </div>
    )
}