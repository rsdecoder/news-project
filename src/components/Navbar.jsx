import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
       <nav className = "nav">
        <Link to ="/" ><a  className="nav-item" >Home</a></Link>
        <Link to ="/articles" ><a className='nav-item'>Articles</a></Link>
       </nav>
    );
};

export default Navbar;