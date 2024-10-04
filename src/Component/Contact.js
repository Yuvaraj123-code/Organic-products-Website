import React from 'react'
import Contact from './Contact.scss'
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
//
import background from '../Component/R.jpg'



const Home=()=> {
  return (
    <div className='contactcon'>
        <form>
        <input className ="contact" type='text' placeholder='Enter your Name'></input>
        <input className ="contact" type='text' placeholder='Enter your Number'></input>
        <input className ="contact" type='Email' placeholder='Enter your Email'></input>
        <input className ="contact" type='text' placeholder='Enter your Alternate Email'></input>
        <input className ="contact" type='text' placeholder='Enter your Gender'></input><br></br>
        <button  className="contactbutton" type='submit'>Submit</button>

<div>
  <image  className='imagelogo'  control>
    <source src={background} type="image/ogg"></source>
  </image>
</div>

<p id='paragraph'>email: urajys1430@gmail.com <TfiEmail />
<br></br>
Phone : +91-6309376010<FaPhone />
<br></br>
Location : Chennai<FaLocationDot />
</p>
        
        </form>

    </div>


    
  )
}

export default Home