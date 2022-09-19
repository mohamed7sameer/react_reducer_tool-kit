import React from 'react'

const Header = (props) => {
    const isLogin = props.isLogin;
    
    const login = ()=>{
        props.setIsLogin(true)
    }
    const logout = ()=>{
        props.setIsLogin(false)
    }
  return (
    <header>
        <div className='num'>{props.counter}</div>
        {isLogin && (
            <div className='txt'>hello</div>
        )}

        {!isLogin && (
            <button onClick={login}>login</button>
        )}
        {isLogin && (
            <button onClick={logout}>logout</button>
        )}
        
    </header>
  )
}

export default Header