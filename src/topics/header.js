import React, { Component } from 'react';
import Logo from '../assets/logo192.png'
import '../topics/styles.css'

class Header extends Component {
    render() { 
        return (
            <header>
                <nav>
                    <img className='nav-logo' src={Logo}/>
                    <ul className='nav-items'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default Header;