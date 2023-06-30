import React, { useState } from 'react'
import "./login.css"
//import Signup from './signup'
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../config/fire.js";
//import {Text} from "react";

export const Login=(props)=> {

    const [email, setEmail] = useState("")
    const [password,setPassword] =useState("")

    const handlesubmit =(e)=>{

       //e.preventdefault();
       console.log(email);
       signInWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
          console.log(userCredential);
        }).catch((error)=>{
            console.log(error);
        })
       

    }
    return (
        <div className='login-container'>
        
      <form onSubmit={handlesubmit} className="login-form">
      <label htmlFor='email'>Email</label>
          <input value={email} 
           onChange={(e) => setEmail(e.target.value)}
          type="email" id='email' name='email' autoComplete="username" placeholder='email'></input><br/>
          <label htmlFor='password'>Password</label>
          <input value={password} 
           onChange={(e) => setPassword(e.target.value)}
          type="password" id='password' name='password' autoComplete="current-password" placeholder='********'></input><br/>
          <button type="Submit">login</button><br/>
          
      </form>
      <button className='signup' onClick={()=>props.onFormSwitch('Signup')} >don't have an account ? SignUp here</button><br/>
      </div>
    )
  
}
export default Login;