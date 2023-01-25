import React from 'react';
import './App.css';
import {useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [toDos,setTodos]= useState([])
  const [
    toDo,setTodo] = useState('')
  const reload = (e)=>{
    e.preventDefault()
  }
  const empty =()=>{
    toast.success("Task added")
    setTodos([...toDos,{id:Date.now() ,text:toDo,status:false}])
    setTodo('')
    
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TO DO - LIST</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> </h2>
      </div>

      <div onSubmit={reload} className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder=" Add activity..." />
        <i onClick={empty} className={toDo ? "fas fa-plus":''}></i>
      </div>

      <div className="todos">
       { toDos.map((value)=>{

      return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(value)
              setTodos(toDos.filter(obj=>{
                if(obj.id===value.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
            }}
             value={value.status} type="checkbox" name="" id="" />
             
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setTodos(toDos.filter(obj=>{
                let temp;
                if(obj.id !== value.id){
                  console.log(obj)
                  temp = obj
                }
                return temp
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>)
        }) }
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
