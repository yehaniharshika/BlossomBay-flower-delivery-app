import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1 className="logo">BlossomBay</h1>
            <p>Experience the magic of blooms-fresh, vibrant, and perfect for every moment...💐</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
            </div>

            <div className="footer-content-center">
                <h3>BlossomBay (Pvt) Ltd.</h3>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h3>GET IN TOUCH</h3>
                <ul>
                    <li>+9438-345-7890</li>
                    <li>coontact@blossombay.com</li>
                
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © BlossomBay.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
