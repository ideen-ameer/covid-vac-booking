import React, { useState } from 'react';
//import Login from './login';
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../config/fire.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./signup.css"
//import {Text} from "react";
const Signup  = (props) => {

    const [email, setEmail] = useState("");
    const [password,setPassword] =useState("");
    const [name,setName] = useState("");
    const handlesubmit =(e)=>{

        e.preventdefault();
        console.log(email);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
           console.log(userCredential);
         }).catch((error)=>{
             console.log(error);
         })

    }

    return (
        <div className='signup-container'>
        
        <form  className='signup-form'   onSubmit={handlesubmit}>
            <label htmlFor='email'>Email</label>
            <input 
            value={email}    
             onChange={(e) => setEmail(e.target.value)}

             type="email" id='email' name='email' autoComplete="username" placeholder='email'></input><br/>
            <label htmlFor='password'>Password</label>
            <input value={password} 
            onChange={(e) => setPassword(e.target.value)}
            type="password" id='password' name='password' autoComplete="current-password" placeholder='********'></input><br/>
            <label htmlFor='Name'>Name</label>
            <input value={name} 
             onChange={(e) => setName(e.target.value)}
            type="Name" id='Name' name='Name' autoComplete="name" placeholder='enter name'></input><br/>
            
            <button type='submit'>signup</button><br/>

        </form>
        <button onClick={()=>props.onFormSwitch('Login')}>Already have an account Login here</button>
        </div>
        
    );
  }
 export default Signup;