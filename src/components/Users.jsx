import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../apis'; 
import UserShowCard from './UserShowCard';
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';

const Users = () => { 
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([])

    useEffect(() => {
        setIsLoading(true);
        fetchAllUsers()
        .then(({users}) => {
            setUsers(users)
            setIsLoading(false);
        })
    }, [setUsers])

    if(isLoading) {
        return <h1 className='loader'>Loading....<RotateRightSharpIcon /></h1>
    } 
    
    return (
        <div id = 'users'>
            <ul>
               <h1>Choose a user to Login</h1>
                {users.map((user) => {  
                     return <UserShowCard user = {user} key = {user.username}/>
                })}
            </ul>
            
        </div>
    );
};

export default Users;