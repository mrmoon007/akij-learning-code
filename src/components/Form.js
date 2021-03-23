import React,{useState} from 'react'
import Show from './Show';

export default function Form() {

    const [sate, setSate]=useState({
        name:' ',
      
    })

    const [edit,setEdit]=useState(false)

    const [listData,setListData]=useState({
        list:[]
    })

    const onChangeHandeler=(e)=>{
        let name=e.target.value;
        setSate({
            name:name,
        })
        
    }

    const submitHendeler=(e)=>{
        e.preventDefault();
         const listget = {...listData};
         let data = {
            name:sate.name
        }
         listget.list.push(data)

         console.log(`listget`, listget);

        setListData(listget);
        
    }
    console.log(`listData`, listData.list);

    const deleteHandler=(id)=>{
        const clonedata= {...listData}
        clonedata.list.splice(id,1)
        setListData(clonedata)

    }

    const editHandler=(data,id)=>{
        // alert("helllo edit");
        // listData.filter(id===index)
        setEdit(true)
        const cloneEdit={...sate}
        cloneEdit.name=data.name
        setSate(cloneEdit)
        console.log(sate)
    }
    

    return (
        <div>
            <form onSubmit={(e)=>submitHendeler(e)}>
                <p>Register Your data</p>
                <p>{sate.name}</p>
                <input type="text" onChange={onChangeHandeler} value={sate.name}  placeholder="Enter your name"></input><br></br>
                <button type='submit'>Save</button>
            </form>

            <div>
                {
                    listData.list.map((data,id)=>(
                        <>
                            <Show data={data}
                                  id={id} 
                                  deleteHandler={()=>deleteHandler(id)}
                                  editHandler={editHandler(data,id)}
                                  
                            />
                        </>
                        
                    ))
                }
            </div>
            
        </div>
        
    )
}
