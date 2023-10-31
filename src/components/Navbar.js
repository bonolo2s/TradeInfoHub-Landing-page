import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <Link to='/' className='logo' >TradeInfoHub</Link>

            <div className='menu-icon' >
                <span></span>   
                <span></span>
                <span></span>          
            </div>

            <ul>
                <li>
                    <NavLink to='/Services' >Services</NavLink>
                </li>
                <li>
                    <NavLink to='/About' >About</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact' >Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/Sign-Up' >Sign Up</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;