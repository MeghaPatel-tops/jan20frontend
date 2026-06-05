import { useState } from "react"

const  useCounter= (initValue = 0)=>{
    const [counter,setCounter]=useState(initValue);

    const incre = ()=>{
        setCounter(counter+1)
    }
    const decre = ()=>{
        setCounter(counter-1)
    }

    return {counter,incre,decre}
}

export default useCounter