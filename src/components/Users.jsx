import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../apis'; 
import UserShowCard from './UserShowCard';
import { ThreeDots } from 'react-loader-spinner';


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
        return(<ThreeDots
            visible={true}
            height= "30%"
            width="30%"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="spinner-icon"
            />)
    } 
    
    return (
        <div id = 'users-page'>   
               <h3>You are currently logged in as a guest, Choose a different user to Login</h3>
               <div className = "users">
                {users.map((user) => {  
                     return <UserShowCard user = {user} key = {user.username}/>
                })}            
               </div>
        </div>
    );
};

export default Users;