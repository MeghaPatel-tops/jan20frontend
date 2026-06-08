import React, { useReducer } from 'react'
import { initialValue, reduce } from './CounterReducer'

function Counter() {
    const [state,dispatch] = useReducer(reduce,initialValue)
  return (
    <div className='flex justify-center items-center h-100' >
        <div className="rounded p-12 border-5 border-gray-900">
            <h2 className='text-3xl mb-5'>Counter App using <br/>useReducer hook </h2>
            <button className='px-6 py-1 bg-gray-500 rounded text-white' onClick={()=>dispatch({type:'incre'})}>+</button>
            <span className='mx-4'>{state.count}</span>
            <button className='px-6 py-1 bg-gray-500 rounded text-white' onClick={()=>dispatch({type:'decre'})}>-</button>

        </div>
    </div>
  )
}

export default Counter