import React from 'react'
import {Link} from 'react-router-dom'
import './Create.scss'

const Create=()=> {
  return (
   
      <div className='cointainer'>
        <form action="">
            <br></br>
        <h1>Create an account</h1>
        <br></br>
        <label>First Name</label>
                <input type="text"
                 id='inputone'required></input><br></br><br></br>
        <label>Last Name</label>
                <input type="text"
                 id='inputone'required></input><br></br><br></br>
        <label>Company Name</label>
                <input type="text"
                 id='inputthree'required></input><br></br><br></br>
        <label>Phone Number</label>
                <input type="text"
                 id='inputfour'required></input><br></br><br></br>
        <label>Email </label>
                <input type="email"
                 id='inputfive'required></input><br></br><br></br>
        <label>Password</label>
                <input type="password"
                 id='inputsix'required></input><br></br><br></br>
        <label>Confirm Password</label>
                <input type="password"
                 id='inputseven'required></input><br></br><br></br>

        <button id="Button">Create</button>
                 </form>

        
        
    </div>
  )}

export default Create