import React from "react";
import './ListItem.css'

function ListItem({ke,content,remove,completed}){
   
    return (
        <div className='listItem'>
            <label id={ke}  className='content' >{content}</label>
            <div>
                <button className="doneBtn" onClick={()=>{completed(ke)}}><i className="fa-solid fa-check"></i></button>
                <button className='deleteBtn' onClick={()=>{remove(ke)}}><i className="fa-solid fa-trash"></i></button>
            </div>
            
          </div>
    )
}

export default ListItem;