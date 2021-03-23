import React,{useState} from 'react';
const FunctionCunter = () => {

    const [counter,setCounter]=useState(0);
    const increment=()=>{
        setCounter(counter + 1 )
    }

    const discrement=()=>{
        let m = counter > 0 ? setCounter(counter - 1): counter
    }
    return ( 
        <>
            <button onClick={increment}>+</button>
            {counter}
            <button onClick={discrement}>-</button>
        </>
     );
}
 
export default FunctionCunter;