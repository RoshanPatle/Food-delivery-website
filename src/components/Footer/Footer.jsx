import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
<div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse sint illo repellendus ipsum,
     at minima vero odit exercitationem. Quaerat aut, qui quos mollitia debitis eum fuga illum consequuntur dolorem\
     </p>
     <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
     </div>
</div>
<div className="footer-content-center">
    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivey</li>
        <li> privacy policy</li>
    </ul>

</div>
<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-456-7890</li>
    <li>contact@tomato.com</li>
</ul>
</div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 0 Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
