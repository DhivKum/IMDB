import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

function Counter() {

    const countValue = useSelector((state) => state.count.value);

    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

  return (
    <div>
        <h1> Counter : {countValue} </h1>
        <button onClick={onIncrement} className='m-5 p-5 bg-blue-600'>Increment</button>
        <button onClick={onDecrement}className='m-5 p-5 bg-blue-600'>Decrement</button>
    </div>
  )
}

export default Counter;