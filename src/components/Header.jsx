import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/User';

const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    return (
    <header className= "header">
        <h1 className='header-welcome'>Welcome to NC News!</h1>
        <div className = 'login-info'>
            <img src = {loggedInUser.avatar_url} className='logged-in-img log-in-item'/>
            <p className='logged-in-user log-in-item'>{loggedInUser.username} is logged in</p>
        </div>

        <nav className = "nav">
            <Link to ="/"  className="nav-item"> Home</Link>
            <Link to ="/articles" className='nav-item'>Articles</Link>
            <Link to ="/users" className = 'nav-item nav-log-in'>Login</Link>
            <Link to ="/articles/:article" className='nav-item'></Link>
       </nav>
    </header>   
    );
};

export default Header;