// navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className='nav-bar'>
                {/* logo de la navbar */}
                <div className='logo'>
                    <h1>CASTIDOZA</h1>
                </div>
                {/* barra de busqueda */}
                <div className='search-bar'>
                    <input type='text' placeholder='Search' />
                </div>
                <ul className='nav-links'>
                    <li>
                        <NavLink to="home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </>
    );
}

export default Navbar;