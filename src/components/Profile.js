import React from 'react'

import  '../css/profile.css';


export default function Profile(props) {

    return(

        <div className='body-acc'>
            <h1>DealDive - My Account</h1>

            <div className="mid-body-acc">
                <div className="account-details">
                    <img className="avtar" src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png"/>
                    <h2>Account Information</h2>
                    <ul>
                    <li>
                        <span>Name:</span>
                    
                        <div>&#x21DD; NexGen Nexus </div>
                    </li>
                    <li>
                        <span>Email:</span>
                        <div>&#10162; johndoe@example.com</div>
                    </li>
                    <li>
                        <span>Phone Number:</span>
                        <div>&#10140; +91 123456879</div>
                    </li>
                    
                    </ul>
                </div>
                <div className="account-details2">
                    
                </div>
            </div>
            <div className="order-history">
                <h2>Order History</h2>
            </div>
            {/* <div className="order-history">
                <h2>Customer Support</h2>
            </div>
            <div className="order-history">
                <h2>Address</h2>
            </div>
            <div className="order-history">
                <h2>Refunds</h2>
            </div>
            <div className="order-history">
                <h2>Notifications</h2>
            </div> */}

            <div className="xp-bar">
                <h2>XP Progress (Level 1)</h2>
                <div className="xp-bar-container">
                <div className="xp-bar-fill" ></div>
                </div>
                <p>0/100 XP</p>
            </div>
        </div>

    )
}
