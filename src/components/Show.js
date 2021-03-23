import React from 'react'

export default function Show(props) {
    return (
        <div>
            <ul>
                <li key={props.id}>
                    <p>{props.data.name}</p>
                    <button onClick={()=>props.deleteHandler(props.id)} >delete</button>
                    <button  >Edit</button>

                </li>
            </ul>
        </div>
    )
}
