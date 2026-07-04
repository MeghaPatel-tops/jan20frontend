import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterSlice, { decre, incre } from "../Components/Redux/CounterSlice";
import {store} from "../Components/Redux/Store"

function Counterapp() {
    const {counter}=useSelector((state)=>state.counter)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Counter app</h2>
        <button className='px-3 mx-2 py-1 bg-blue-800 text-white' onClick={()=>{
            dispatch(incre())
        }}>+</button> <span>{counter}</span>
        <button className='mx-2 px-3 py-1 bg-blue-800 text-white' onClick={()=>{
            dispatch(decre())
        }}>-</button>   
    </div>
  )
}

export default Counterapp