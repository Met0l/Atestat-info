//import React, {useState, useEffect} from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import'./Navbar.css';

function Navbar(){
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     } else{
    //         setButton(true);
    //     }
    // };

    // window.addEventListener('resize', showButton);

    // useEffect(() => {
    //     showButton();
    //     window.addEventListener('resize', showButton);
    //     return () => {
    //         window.removeEventListener('resize', showButton);
    //     };
    // }, []);

    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' >
                Megadeth
            </Link>
            <div className='menu-icon' /*onClick={handleClick}*/>
                 {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Acasa
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/membri' className='nav-links'>
                        Membri
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/discografie' className='nav-links'>
                        Discografie
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/tur' className='nav-links'>
                        Tur
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/media' className='nav-links' >
                        Media
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/noutati' className='nav-links' >
                        Noutăți
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;