import React from 'react'
import useCounter from './counter'

function CounterApp() {
    const {counter,incre,decre} = useCounter(100);
   return (
    <div>
        <fieldset>
            <legend>Counter app</legend>
            <button onClick={incre}>+</button>{counter}<button onClick={decre}>-</button>
        </fieldset>
    </div>
  )
}

export default CounterApp