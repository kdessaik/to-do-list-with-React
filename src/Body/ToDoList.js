import React from 'react'
import { useState } from 'react'

export const ToDoList = () => {
  const toDo=[]
    

    const [Data,setData]=useState('')
   const [storeValue, setStoreValue] = useState([])
   
   
    const handleData = () => {
      return (event) => {setData(event.target.value)}
    }
    const handleClick =()=>{
      toDo.push(Data)
      const delet=document.getElementById('empty')
      const parra=document.getElementById('parra')
      
      storeValue.push(...toDo)
      
      
      
      var retur1=storeValue.map((e)=>{
        const grabList=document.getElementById('listToDo')
        grabList.innerHTML= <li>{retur1}</li>})
        delet.value=''

    }
  console.log(return1)
  

    

  return (
    <div>
    <h1>ToDoList</h1>
    <input
    type='text'
    value={Data}
    onChange={handleData()}
    id='empty'
    >
    
    </input>

    
    <button onClick={handleClick}>Add To Your List </button>
    
    <div>
      <p id='parra'></p>
      <ol id='listToDo'> 
      </ol>
      


    </div>
    

        
        
        
        </div>
  )
}
export default ToDoList