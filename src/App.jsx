import { useState } from 'react'
import AddBox from './components/AddBox'
import './App.css'
import ListItem from './components/ListItem';
function App() {

    const [todoList,setTodoList]=useState([]);
    const addItem=(content)=>{
      if(content!='')
      {
            setTodoList([
          ...todoList,
          {
            content:content
          }
        ])
      }
    }

    const removeItem=(id)=>{
      setTodoList(
        todoList.filter((item,index)=>index!=id)
      )
    }

    const completed=(id)=>{
      document.getElementById(id).classList.add("comp");
  }

  return (
    <>
     <div className='wrapper'>
        <div className='mainContainer'>
          <h1 className='mainHeading'>To-Do List</h1>
          <div className='temp'>
            <AddBox 
          add={addItem}
          />
          <button className='clearAll' 
          onClick={()=>setTodoList([])}>ClearAll</button>
          </div>

          { todoList.map((item,index)=>{
                 return <ListItem  ke={index} remove={removeItem} completed={completed} content={item.content}/>
              })}
        </div>

        <div className='listItems'>
             
          </div>
     </div>
    </>
  )
}

export default App;
