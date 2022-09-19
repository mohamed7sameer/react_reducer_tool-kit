import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin, handleLogout } from './redux/features/authSlice';

const Header = (props) => {
    // const isLogin = props.isLogin;

    const isLogin = useSelector(state=>state.auth.isLogged)
    const counter = useSelector(state=>state.counter.value)
    const dispatch = useDispatch();
    // console.log(isLogged)
    // const login = ()=>{
    //     props.setIsLogin(true)
    // }
    // const logout = ()=>{
    //     props.setIsLogin(false)
    // }
  return (
    <header>
        <div className='num'>{counter}</div>
        {isLogin && (
            <div className='txt'>hello</div>
        )}

        {!isLogin && (
            <button onClick={()=>dispatch(handleLogin())}>login</button>
        )}
        {isLogin && (
            <button onClick={()=>dispatch(handleLogout())}>logout</button>
        )}
        
    </header>
  )
}

export default Header