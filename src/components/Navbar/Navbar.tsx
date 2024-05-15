
import './Navbar.css'
import CADLogo from './../../assets/CAD.png'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu } from "react-icons/rx"; 
import { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = () => {

    const [isActive, setIsActive] = useState<boolean>(false)



    return (
        <nav  >
            <div className='navbar'>    
                <div className='logo--container'>
                    <Link to='/'> <img className='cad--logo' src={CADLogo} /></Link>
                </div>
                
                <ul className='nav--items'>
                    <Link to = '/' className='nav--item'>Home</Link>
                    <Link to = '/' className='nav--item'>Dashboard</Link>
                    <Link to = '/' className='nav--item'>Models</Link>
                    <Link to = '/' className='nav--item'>DLC</Link>
                    <Link to = '/' className='nav--item'>About Us</Link>
                </ul>
 

                <span className='hamburger--logo'> <RxHamburgerMenu onClick={() => {setIsActive(true)}} /></span>
                <div className='hamburger--menu slideLeftAnimate '  style={{'display': isActive ? ' ' : 'none'}}>
                    <Hamburger isActive = {isActive} setIsActive={setIsActive} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar