import React from 'react';
import HomeButton from './TopLeftName';
import NavLinks from './Links';
import Available from './Available';

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