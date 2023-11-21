import React from 'react';
import './Style.css';
import img11 from '../img/1.jpg'


function Sale() {
  return (
    <div>
        <div className='container3'>
            <center>
            <h5 className='mini'>Be Inspired</h5>
            <h2 className='sub'>Properties for sale</h2>

            <div class="card-container">


                

     
 
            <div class="card">
                <div className='container4'>
                <img className='imge' src={img11} />
                <h4 className='price'>25,500,000 LKR</h4>
                <h3 className='titlecd'>Scottish Island Digana</h3>
                <h5 className='address'>Kandy, Sri Lanka</h5>
                <button class="custom-button">See More</button>
                </div>
                
            </div>

            <div class="card">

            <div className='container4'>
                <img className='imge' src={img11} />
                <h4 className='price'>25,500,000 LKR</h4>
                <h3 className='titlecd'>Scottish Island Digana</h3>
                <h5 className='address'>Kandy, Sri Lanka</h5>
                <button class="custom-button">See More</button>
                </div>

            </div>
            <div class="card">
                
            <div className='container4'>
                <img className='imge' src={img11} />
                <h4 className='price'>25,500,000 LKR</h4>
                <h3 className='titlecd'>Scottish Island Digana</h3>
                <h5 className='address'>Kandy, Sri Lanka</h5>
                <button class="custom-button">See More</button>
                </div>


            </div>
            </div>



            {/* ------------------------------ */}

     


            {/* ------------------------------- */}


            </center>
        </div>
        
    </div>
    
  );
}

export default Sale;