import { useState } from 'react'


function App() {
  const [toDo, setToDo] = useState([])
  const [input, handleInput] = useState('')
  const [editIndex, setEditIndex] = useState(-1)
  
  function handleChange(event){
      handleInput(event.target.value)

  }
  
 
 function handleSubmit(event){
     event.preventDefault()
     if(editIndex === -1){
         setToDo((prevTodo) => 
             [...prevTodo, input]
         )
     }else {
         setToDo((prevToDo) => {
             const updatedToDo = [...prevToDo]
             updatedToDo[editIndex] = input 
             return updatedToDo
         })
         setEditIndex(-1)
     }
     handleInput("")
 }

 function handleDeleteToDo(index){
setToDo(prevToDo => prevToDo.filter((_, i) => i !==index))
 }
 
 function handleEditToDo(index){
  setEditIndex(index)
  handleInput(toDo[index])
 }
 
  return(
      <div>
   <form onSubmit={handleSubmit}>
      <input 
          type="text"
          placeholder="Add new Task"
          value={input}
          onChange={handleChange}
          
      />
      <button>Confirm Task</button>
    </form>
   <h4>
 {toDo.map((task, index) => (
       <div key={index}>
       {editIndex === input ? <input
      type="text"
      value={input}
      onChange={handleChange}
      onBlur={() => setEditIndex(-1)}
      autoFocus
    />
   : (
    <span>{task}</span>
  )}
          <button onClick={() => handleEditToDo(index)} >Edit</button>
          <button onClick={() => handleDeleteToDo(index)}>Delete</button> 
       </div>
      ))}
    </h4>
    </div>
  )
}

export default App
