import React, { useEffect, useState } from 'react'

function Home() {
    const [product, setProduct] = useState("");
    const [count, setCount] = useState(0)
    //============run on every render=================
    // useEffect(()=>{
    //     console.log('every render log example')
    // })
    const printProduct = () => {
        let newPro = prompt('Enter product')
        setProduct(newPro)
    }
    //=============run on onec=====================
    //  useEffect(()=>{
    //     console.log('every render log example')
    // },[])

    //===============run when dependancy change===========
    // useEffect(()=>{
    //     console.log('every render log example')


    // },[product])

    // useEffect(() => {
    //     console.log('every render log example')
    //      setCount(count+1)
    //      console.log(count);

    //     return () => {
    //        console.log("cleanup function called");

    //     };

    // }, [product])

    useEffect(() => {
        console.log('gggg');
        
        const handleResize = () => {
            console.log(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>Home
            {product}
            <button onClick={printProduct}>Click</button>
        </div>
    )
}

export default Home