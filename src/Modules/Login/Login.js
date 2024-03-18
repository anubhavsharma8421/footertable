import React from 'react'
import { useState } from "react";
import "./Login.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Weatherapp from '../WeatherApp/WeatherApp';

const Login = () => {
  
  const [user, SetUser] = useState("")
  const [pswd, Setpswd]= useState("")

  const handleChangeuser = (e) => {
    

    SetUser(e.target.value)
  }

  const handleChangepswd = (e) => {
    
    Setpswd(e.target.value)
  }

  const handleSearch = ()=>{
      if(user=="Anubhav"&& pswd =="Sharma")
      {
        
        console.log("Valid user")
        alert("Hello Anubhav")

        // <link><Weatherapp/></link>
      }

      else if(user=="Harsh"&& pswd =="Tannu")
      {
        
        console.log("Valid user")
        alert("Hello Harsh")
        // <link><Weatherapp/></link>
      }

      else
      {
        console.log("inavlid user")
        alert("Invalid user")
      }
  }
  
  return (
    <div className='container'>
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input_box'>
          <input type='text'placeholder='Username' onChange={handleChangeuser} required value={user} autoFocus/>
          <FaUser className='icon'/>
        </div>
        <div className='input_box'>
          <input type='password'placeholder='Password' onChange={handleChangepswd} required value={pswd}/>
          <FaLock className='icon' />
        </div>

        <div className='remember_forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>

        <button type='submit' onClick={handleSearch}>Login</button>

        <div className='register_link'>
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>

      </form>
    </div>
    </div>
  )
}

export default Login
