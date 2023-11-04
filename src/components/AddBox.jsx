import React from "react";
import { useState } from "react";
import './AddBox.css'

function AddBox({add}){
    const [todo, setTodo]=useState('');
    const handleKeyPress=(e)=>{
        if(e.key=="Enter")
        {
            add(todo);
            setTodo('')
        }

    }

    return (
        <div className="addbox" >
            <input 
            className="input" 
            type="text" 
            placeholder="Add Text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            onKeyPress={(e)=>handleKeyPress(e)}
            ></input>
            <button className="plusBtn" onClick={()=>{add(todo); setTodo('')}}> ADD</button>
        </div>
    )
}

export default AddBox;