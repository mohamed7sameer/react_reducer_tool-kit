import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDecrement, handleIncrement } from './redux/features/counterSlice';

const Counter = (props) => {
    // const increment = (num = 1)=>{
    //     props.setCounter((props.counter + num))
    // }
    // const decrement = (num = 1)=>{
    //     props.setCounter(props.counter - num)
    // }

    const dispatch = useDispatch();
  return (
    <div className='counter'>
        <button onClick={()=>dispatch(handleIncrement(1))}>+</button>
        <button onClick={()=>dispatch(handleIncrement(3))}>+3</button>
        <button onClick={()=>dispatch(handleDecrement(1))}>-</button>
        <button onClick={()=>dispatch(handleDecrement(1))}>-3</button>
    </div>
  )
}

export default Counter