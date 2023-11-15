
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <nav>
            <Link to='/' className='logo' >TradeInfoHub</Link>

            <div className='menu-icon' onClick={toggleMenu} >
                <span></span>   
                <span></span>
                <span></span>          
            </div>

            <ul className={isOpen ? 'open show' : 'open'} >
                <li>
                    <NavLink to='/' >Services</NavLink>
                </li>
                <li>
                    <NavLink to='/' >About</NavLink>
                </li>
                <li>
                    <NavLink to='/' >Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/' >Sign Up</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;