import React from 'react'
import { useState } from 'react';
const User = (props) => {
    const [isLoading,setIsLoading] = useState(false);
    const getUser = async()=>{
        setIsLoading(true)
        const res = await fetch('https://api.github.com/users') ; 
        const data = await res.json()
        setIsLoading(false)
        props.setApiUser(data)
        // })
    }
    

  return (
    <div className='user'>
        {!isLoading &&(
            <button onClick={()=>getUser()}>get user</button>
        )}
        {isLoading &&(
            <button>Loading ...</button>
        )}
        
        <ul>
            {props.apiUser.map(item=>{
                return (<li key={item.id}>{item.login}</li>)
            }
            )}
            
        </ul>
    </div>
  )
}

export default User