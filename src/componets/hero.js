import React from 'react';
import './Style.css';
// import img1 from '../img/img1.png'


function Hero() {
  return (
    <div>
        
        <center>
            <div className='containerhero'>
            {/* <img src={img1} /> */}
            <div className='container1'>
            <h1 className='title'>Buy , rent or sell your property with few clicks</h1>
            <h4 className='smal'>Dubai's Fastest growing brokerage, while providing a new standard of service.</h4>
            <div className='containerse'>
            <input className='inputhero' type="Text" placeholder='City , community or area' /> 

            <div class="dropdown">
              <button class="dropbtn">Bedrooms
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 

            <div class="dropdown">
              <button class="dropbtn">Price Range
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn">All Types
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            </div>

          
            

            
            {/* <h3 className='big'>"Divine Property is the platform I go to on almost a daily basis for 2nd home andvacation condo shopping, or to just look at dream homes in new areas. Thanksfor fun home shopping and comparative analyzing, Divine!"</h3> */}
            </div>
            </div>
        </center>

    </div>
    
  );
}

export default Hero;