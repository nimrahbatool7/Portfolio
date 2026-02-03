import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'

import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        {/* <div className="clients">
            <h1 className="contactPageTitle">
                My Clients
            </h1>
            <p className="clientDesc">
                I have the opprotunity to work with a diverse group of companies. Some of the notable companies i have wroked with includes 
            </p>
            <div className="clientImages">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div> */}
        <div className="contact">
            <h1 className="contactTitle">
                Contact Me
            </h1>
            <p className="contactDesc">
                I have the opprotunity to work with a diverse group of companies. Some of the notable companies i have wroked with includes 
            </p>
            <form action="" className="contactForm">
                <input type="text" className="name" placeholder='Enter Your Full Name'/>
                <input type="email" className="email" placeholder='Enter Your Email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'>

                </textarea>
                <button className="submitBtn"  type='submit' value='send'>
                    Submit
                </button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className="linkImg" /> 
                    <img src={TwitterIcon} alt="" className="linkImg" /> 
                    <img src={YouTubeIcon} alt="" className="linkImg" />
                    <img src={InstagramIcon} alt="" className="linkImg" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact