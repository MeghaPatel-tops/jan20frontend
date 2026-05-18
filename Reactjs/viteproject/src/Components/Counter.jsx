import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const incre = () => {
        alert(count)
        setCount(count + 1)
    }
    const decre = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={incre}>+</button>{count}<button onClick={decre}>-</button>
        </div>
    )
}

export default Counter