import React from 'react'
import imglogo from "../img/logo.png";
import imgfb from "../img/fb.png";
import imginsta from "../img/insta.png";
import imglinked from "../img/linked.png";

export default function Footer() {
  return (
    <div>

      <div className='containerf'>

        <div class="itemfl">
        <img className="imgelogof" src={imglogo} />
        </div>
        <div class="itemf">
            <h3 className='mini'>Sell a home</h3>

            <h4 className='flink'>Browse properties</h4>
            <h4 className='flink'>List your</h4>
            <br></br>
            <h3 className='mini'>Invest</h3>

            <h4 className='flink'>Off-plan</h4>
            <h4 className='flink'>Developers</h4>

        </div>
        <div class="itemf">
        <h3 className='mini'>Rent a home</h3>

        <h4 className='flink'>Browse properties</h4>
        <h4 className='flink'>List your</h4>
        <br></br>
        <h3 className='mini'>Terms & Privacy</h3>

        <h4 className='flink'>Terms </h4>
        <h4 className='flink'>Privacy Policy</h4>

        </div>
        <div class="itemf">
        <h3 className='mini'>About</h3>

        <h4 className='flink'>Company </h4>
        <h4 className='flink'>How it works</h4>
        <h4 className='flink'>Talk to us</h4>
        </div>

      </div>

      <div className='containerlastf'>
      <div class="copy">
        <h3 className='copyright'>@2023 Divine Properties. All Rights Reserved.</h3>
        </div> 

        <div class="social">
        <img className="imgsocial" src={imgfb} />
        <img className="imgsocial" src={imginsta} />
        <img className="imgsocial" src={imglinked} />
        </div>

      </div>
      
    </div>
  )
}

