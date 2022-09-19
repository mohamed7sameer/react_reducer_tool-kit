import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/features/usersSlice';
import { useSelector } from 'react-redux';
const User = (props) => {


    // const [isLoading,setIsLoading] = useState(false);

    // const getUser = async()=>{
    //     setIsLoading(true)
    //     const res = await fetch('https://api.github.com/users') ; 
    //     const data = await res.json()
    //     setIsLoading(false)
    //     props.setApiUser(data)
    //     // })
    // }

    const dispatch = useDispatch()
    const stateUser = useSelector(state=>state.user)

  return (
    <div className='user'>
        {!stateUser.loading &&(
            <button onClick={()=>dispatch(getUser())}>get user</button>
        )}
        {stateUser.loading &&(
            <button>Loading ...</button>
        )}
        
        <ul>
            {!stateUser.error&&stateUser.data.map(item=>{
                
                return (<li key={item.id}>{item.login}</li>)
                }
            )}
            
            
        </ul>
    </div>
  )
}

export default User