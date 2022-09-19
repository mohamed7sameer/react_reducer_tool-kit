import React from 'react'

const Counter = (props) => {
    const increment = (num = 1)=>{
        props.setCounter((props.counter + num))
    }
    const decrement = (num = 1)=>{
        props.setCounter(props.counter - num)
    }
  return (
    <div className='counter'>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>increment(3)}>+3</button>
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>decrement(3)}>-3</button>
    </div>
  )
}

export default Counter