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
            <h3 className='user-items user-name'>{name}</h3>
            <img src={avatar_url} width="100px" height="100px" alt = "A picture of the user" className='user-items user-img'/>
            <h4 className='user-items user-username'>username: <span className = "username">{username}</span></h4>
            <button className='user-items user-log-in-button' onClick={() => handleClick(user)}>Login</button>   
        </div>
        
    );
};

export default UserShowCard;