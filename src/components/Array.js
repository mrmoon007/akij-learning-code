import React from 'react'

export default function Array() {

        const tasks=[
            'task 1',
            'task 2',
            'task 3'
        ]

        // for (let i = 0; i < tasks.length; i++) {
        //     const element = tasks[i];
        //     console.log(element)
            
        // }
        // tasks.forEach(task=>{
        //     console.log('task for forEach'+task);
        // })

        // tasks.map((task,index)=>{
        //     console.log('map function'+task)
        // })
        


    return (
        <div>
            
           <ul>
               {
                   tasks.map((task,index)=>(
                       <li key={index}>{task}</li>
                   ))
                
               }
           </ul>
        </div>
    )
}
