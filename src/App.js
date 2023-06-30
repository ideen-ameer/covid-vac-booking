
//import fire from './config/fire';
//import videoBackground from './components/backvideo/COVID-19.mp4';
//import home from './home';
//import {Login} from './components/Auth/login';
import Login from './components/Auth/login';
//import {Signup} from './components/Auth/signup';
import Signup from './components/Auth/signup';
import React, { useState} from 'react';
import './App.css';

const App =() =>{

const [activescreen,setActivescreen] = useState('Login');

const toggleform =(formname)=>{
           
         setActivescreen(formname);

};


return (
      
      <div className="background-container">
      
  
     { activescreen === "Login" ? <Login onFormSwitch={toggleform}/> : <Signup onFormSwitch={toggleform}/>}

</div>

)
}

export default App;