import React, { useEffect, useState } from 'react';
import {BsFillMoonStarsFill, BsSunFill} from  'react-icons/bs'


import './App.css';

import Switch from "react-switch";
import TaskContanier from './components/TaskContainer';
function App() {


   
  const [tasks ,setTasks] =useState([])
  const [dark ,setDark] = useState(true)

  useEffect(()=>{
    const myTodo = localStorage.getItem('myTodaTasks')
     myTodo ? setTasks(JSON.parse(myTodo)) : console.log('ich habe nicht verbindet')

  },[])
  return (
    <div className={`${dark ? 'darkMode-App' :'lightMode-App' } App`}>
     <div className={`${dark ? 'darkMode-App-title-contanier' : ' lightMode-app-title-contanier'} app-title-contanier`}>
      <h1 className='app-title'> To Do App</h1>
      <Switch 
      checked={dark}
      onChange={()=>setDark(!dark)}
      uncheckedIcon={
        <div className='check-sun-btn'>
        <BsSunFill size={18} /> </div>
      }
      checkedIcon={
        <div className='check-moon-btn'>
        <BsFillMoonStarsFill size={18}/>
        </div>
      }
      />
   <TaskContanier 
     tasks= {tasks} 
     setTasks = {setTasks} 
      dark = {dark}/>
     </div>
     
    </div>
  );
}

export default App;
// const person = { name: "Alex" };
// localStorage.setItem("user", person);
// console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
// localStorage.setItem("user", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }