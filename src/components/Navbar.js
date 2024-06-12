import react from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import'./Navbar.css';

function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                {/* CND <i className="fa-solid fa-circle"></i> */}
                Megadeth
            </Link>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
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
                    <Link to='/media' className='nav-links'>
                        Media
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/noutati' className='nav-links'>
                        Noutati
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;