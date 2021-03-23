import React from 'react'

export default function Child1(props) {

    const setCounter=props.setCounter
    const counter=props.counter

    return (

        <div>
            <button onClick={()=>setCounter(counter + 1 )}>+</button>
            {counter}
            <button onClick={()=>setCounter(counter - 1 )}>-</button>
        </div>
    )
}
