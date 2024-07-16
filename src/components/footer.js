import '../css/footer.css';

import React from 'react'



export default function footer() {
  return (
    <>
        <div className='footer'>
            <div className='contact'>
                <h1 className='h11'>Contact us</h1>
                <input type='text' className="input-text" placeholder='name'/>
                <input type='text' className="input-text" placeholder='email'/>
                <textarea type='textarea' className="textarea" placeholder='message'/>
            </div>
            <div className='footer-right'>
                <h1>Dealdive</h1>
                <div className='bbox'>
                    <div className='box'>
                        <a>about</a>
                        <a>Service</a>
                        <a>Contact</a>
                    </div>
                    <div className='box'>
                        <a>Help</a>
                        <a>Customer Support</a>
                        <a>Delivery Details</a>
                    </div>
                    <div className='box'>
                        <a>Get connected</a>
                        <a>Join the conversation on social</a>
                        <a>media and stay connected with our</a>
                        <a>latest products and Services.</a>
                    </div>
                </div>
                <div className='lower-text'>
                    <u>Stay informed</u>
                    <p className='color'>Subscribe to our notification to receive updates of new products and services.</p>
                    <p className='green'>Subscribe</p>
                </div>
            </div>
        </div>
        <div className='lowest'>
        Privacy Policy | Terms of Use | Refund Policy

        </div>

    </>
  )
}
