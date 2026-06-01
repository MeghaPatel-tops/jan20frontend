import React, { useEffect, useRef, useState } from 'react'

function FormEx() {
    const count = useRef(0);

    const inputRef = useRef();
 

    useEffect(()=>{
        console.log('here');
        inputRef.current.focus();
    },[])
  return (
    <div>
        <form action="">
            <input type="text" name="" id="" ref={inputRef} />
        </form>
        <button onClick={(()=>{
             count.current= count.current +1
             console.log(count.current);
        })}>+</button>{count.current}<button onClick={()=>{
              count.current= count.current-1
            console.log(count.current);
            
        }}>-</button>
    </div>
  )
}

export default FormEx