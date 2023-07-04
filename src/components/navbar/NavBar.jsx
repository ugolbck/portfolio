import React from 'react';
import HomeButton from './Home';
import NavLinks from './Links';
import Available from './Available';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <HomeButton />
            <div className='nav-bar-right-items'>
                <Available />
                <NavLinks />
            </div>
        </div>
    )
}