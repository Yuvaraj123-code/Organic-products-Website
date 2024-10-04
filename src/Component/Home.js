import React from 'react'
import '../Component/Home.scss'
//

//
import Fruitimages from '../Assets/fruits/istockphoto-1197091958-612x612.jpg'
import Fruitimages1 from '../Assets/fruits/istockphoto-823672534-612x612.jpg'
import Fruitimages2 from '../Assets/fruits/istockphoto-1491267889-612x612.jpg'
import Fruitimages3 from '../Assets/fruits/istockphoto-621839788-612x612.jpg'
import Fruitimages4 from '../Assets/fruits/istockphoto-1943136581-612x612.jpg'
import vegetables1 from '../Assets/istockphoto-104822169-612x612.jpg'
import vegetables2 from '../Assets/istockphoto-1319057808-612x612.jpg'
import vegetables3 from '../Assets/istockphoto-2024923797-170667a.webp'
import vegetables from '../Assets/istockphoto-1041944478-612x612.jpg'
import vegetables4 from '../Assets/istockphoto-182174646-612x612.jpg'
//
import leaves from '../Assets/leaves/istockphoto-1159999393-612x612.jpg'
import leaves1 from '../Assets/leaves/OIP.jpg'
import leaves2 from '../Assets/leaves/istockphoto-1347540778-612x612.jpg'
import leaves3 from '../Assets/leaves/istockphoto-477423372-612x612.jpg'
import leaves4 from '../Assets/leaves/premium_photo-1667052430195-8e5457a3cc5a.avif'
//
import grains from '../Assets/grains/istockphoto-1034398086-612x612.jpg'
import grains1 from '../Assets/grains/istockphoto-1356209555-612x612.jpg'
import grains2 from '../Assets/grains/istockphoto-172195254-612x612.jpg'
import grains3 from '../Assets/grains/istockphoto-173589620-612x612.jpg'
import grains4 from '../Assets/grains/istockphoto-2158306746-612x612.jpg'
//
import spices from '../Assets/species/istockphoto-1152072821-612x612.jpg'
import spices1 from '../Assets/species/istockphoto-1351596406-612x612.jpg'
import spices2 from '../Assets/species/istockphoto-155826517-612x612.jpg'
import spices3 from '../Assets/species/istockphoto-182877382-612x612.jpg'
import spices4 from '../Assets/species/istockphoto-496626044-612x612.jpg'
//
import nut from '../Assets/proten/OIP (1).jpg'
import nut1 from '../Assets/proten/OIP.jpg'
import nut2 from '../Assets/proten/istockphoto-1353366542-612x612.jpg'
import nut3 from '../Assets/proten/istockphoto-175533534-612x612.jpg'
import nut4 from '../Assets/proten/istockphoto-1874329412-612x612.jpg'
//
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";













const Home=()=> {
  
  return (
    <div className='Home'>
         <div class="allfood1">
          <div className='one'>
           
          </div>
          <div className='vegetables'>
            <h2>Organic vegetables</h2>
            <div className='image0'>
            <img src = {vegetables4} height="200px" width="200px"/> 
            <img src = {vegetables3} height="200px" width="200px"/> 
            <img src = {vegetables2} height="200px" width="200px"/> 
            <img src = {vegetables1} height="200px" width="200px"/> 
            <img src = {vegetables} height="200px" width="200px"/> 
            <button>More </button>


            </div>
          </div>
          
          <div id='ten'>
            <h2>Organic fruits</h2>
            <div className='image1'>
            <img src = {Fruitimages} height="200px" width="200px"/> 
          
            <img src = {Fruitimages1} height="200px" width="200px"/>
            <img src = {Fruitimages2} height="200px" width="200px"/>
            <img src = {Fruitimages3} height="200px" width="200px"/>
            <img src = {Fruitimages4} height="200px" width="200px"/>
            <button>More </button>

         </div>
          </div>
          <div className='leaves'>
            <h2>Organic leaves</h2>
            <div className='image2'>
            <img src = {leaves} height="200px" width="200px"/> 
            <img src = {leaves1} height="200px" width="200px"/> 
            <img src = {leaves2} height="200px" width="200px"/> 
            <img src = {leaves3} height="200px" width="200px"/> 
            <img src = {leaves4} height="200px" width="200px"/> 
            <button>More </button>

            </div>
            </div>
            <div className='grains'>
            <h2>Organic Grains</h2>
            <div className='image3'>
            <img src = {grains} height="200px" width="200px"/> 
            <img src = {grains1} height="200px" width="200px"/> 
            <img src = {grains2} height="200px" width="200px"/> 
            <img src = {grains3} height="200px" width="200px"/> 
            <img src = {grains4} height="200px" width="200px"/> 
            <button>More </button>

            </div>
            </div>
            <div className='species'>
            <h2>Organic spices</h2>
            <div className='image4'>
            <img src = {spices} height="200px" width="200px"/> 
            <img src = {spices1} height="200px" width="200px"/> 
            <img src = {spices2} height="200px" width="200px"/> 
            <img src = {spices3} height="200px" width="200px"/> 
            <img src = {spices4} height="200px" width="200px"/> 
            <button>More </button>

            </div>
            </div>
            <div className='Nuts'>
            <h2>Organic spices</h2>
            <div className='image5'>
            <img src = {nut} height="200px" width="200px"/> 
            <img src = {nut1} height="200px" width="200px"/> 
            <img src = {nut2} height="200px" width="200px"/> 
            <img src = {nut3} height="200px" width="200px"/> 
            <img src = {nut4} height="200px" width="200px"/> 
            <button>More </button>

            </div>
            </div>
            
          
          <div id='footerp'>
          <p id='paragraph'>
            Contact Us <br></br>
            email: urajys1430@gmail.com <MdEmail />

<br></br>
Phone : +91-6309376010<FaPhoneAlt />

<br></br>
Location : Chennai<FaLocationDot />
<br></br>
CopyRights@yuva
</p>
            </div>
            </div>
            </div>


          
         
        
      
  
  )
}

export default Home