import { useRef, useState } from "react";

function Counter(){
    console.log("render-Counter");

    let num = useRef(0);
    const  [number,setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        setNumber(number => number+1);
        num.current++;
        console.log(number);
    }

    return (
        <>
            <h1 style={{color:'white'}}>{number} {num.current}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;