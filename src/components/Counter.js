import { useCallback, useMemo, useRef, useState } from "react";


function Counter(){
    console.log("render-Counter");
    
    const fibbFx =  useCallback(function fibb(num){
        if(num === 1 || num === 2)return 1;
        return fibb(num-1) + fibb(num-2);
    },[]);

    let num = useRef(0);
    const  [number,setNumber] = useState(20);

    function handleClick(e){
        e.stopPropagation();
        setNumber(number => number+1);
        num.current++;
        console.log(number);
    }

    const fibMemoizes =  useMemo(() => fibbFx(number),[number,fibbFx]);

    return (
        <>
            <h1 style={{color:'white'}}>{number} {num.current} || {fibMemoizes}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;