import React, {useState} from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <nav>
            <a href='/' className='logo' >TradeInfoHub</a>

            <div className='menu-icon' onClick={toggleMenu} >
                <span></span>   
                <span></span>
                <span></span>          
            </div>

            <ul className={isOpen ? 'open show' : 'open'} >
                <li>
                    <a href='/#Services'>Services</a>
                </li>
                <li>
                    <a href='/#About'>About</a>
                </li>
                <li>
                    <a href='/#Contact'>Contact</a>
                </li>
                <li>
                    <a href='/#subscribe'>Sign Up</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;