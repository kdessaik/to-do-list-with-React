import React from 'react'
import { useState } from 'react'
import Display from './Display'

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
      delet.value=''
     
      console.log(Data)
      

    }
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

    
    <button onClick={handleClick} className='btn btn-danger'>Add To Your List </button>
    
    <div>
      
<Display
list={storeValue}
/>

    </div>
</div>
  )
}
export default ToDoList