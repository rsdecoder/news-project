import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <header className= "header">
        <h1 className='header-welcome'>Welcome to NC News!</h1>
        <nav className = "nav">
            <Link to ="/"  className="nav-item"> Home</Link>
            <Link to ="/articles" className='nav-item'>Articles</Link>
            <Link to ="/articles/:article" className='nav-item'></Link>
       </nav>
    </header>   
    );
};

export default Header;