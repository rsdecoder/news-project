import React from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/User';
import { useNavigate } from 'react-router-dom';

const UserShowCard = ({user}) => {
    const navigate = useNavigate()
    const {username, name, avatar_url} =  user;
    const {setLoggedInUser} = useContext(UserContext)

    function handleClick() {
        setLoggedInUser(user)
        alert(`logged in as ${user.username}`)
        navigate('/articles')
    }

    return (
        <div className= 'user'>
            <li>
                <h3 className='user-items'>{username}</h3>
                <img src={avatar_url} width="100px" height="100px" alt = "A picture of the user" className='user-items'/>
                <h4 className='user-items'>Name: {name}</h4>
            </li>
            <button className='user-items user-button' onClick={() => handleClick(user)}>Login</button>   
        </div>
        
    );
};

export default UserShowCard;