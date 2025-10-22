import React from 'react'
import { useState } from 'react'
const ToDo = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const handleSubmit=()=>{
        setData([...data,text])
       
    }


    const deleteToDo=(index)=>{
        const newData=data.filter((item,i)=>i!==index);
        setData(newData);
    }
    const editToDo=(index)=>{
        const newText=prompt("Enter new text");
        const newData=[...data];
        newData[index]=newText;
        setData(newData);
    }
  return (
    <div>
        <input type="text"  onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        {
            data.map((item,index)=>{return <p key={index}>{item}   <button onClick={()=>editToDo(index)}>edit</button> <button onClick={()=>deleteToDo(index)}>delete</button></p>})
            }
        </div>
  )
}

export default ToDo
