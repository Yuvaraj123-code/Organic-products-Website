import React from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import Video from '../Assets/proten/fl.mp4'

const Login=()=> {

   


  return (
    
    <div className='Loginform'>
        <form>
            <div className='Loginform-link'>
        <h1>Login</h1>
        <label>Username</label>
        <input className="one" type="text" ></input><br></br>
        <label>Password</label>
        <input className="one" type="password"></input>
        <br>
        </br><a href="#" className='forgetpassword'> Forget password?</a>
        <br></br>
        <br></br>
        <button>Login</button>
        <p>Or</p>
    <p>Sign Up with email link<br></br>
    Dont have account <Link to='/create'>Create Account</Link></p>
    </div>
        </form>
        <div>
          <video className='background' autoPlay loop muted>
            <source src={Video} type='video/mp4'></source>
          </video>
        </div>
    </div>
  )
}

export default Login