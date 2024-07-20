import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import '../css/Login.css';
import td from '../static/images/td.png';
import ldealdive from '../static/images/vegetable.png';
import cart from '../static/images/shopping-cart.png';
import person from '../static/images/person.png';

import botw from '../static/images/bot-w.png';
import botb from '../static/images/bot-b.png';

import scanw from '../static/images/scan-w.png';
import scand from '../static/images/scan-b.png';

import orderw from '../static/images/order-w.png';
import orderb from '../static/images/order-b.png';

import axios from 'axios';

export default function Navbar(props) {
  const [navStatus, setNavStatus] = useState("d-dis");
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [signInData, setSignInData] = useState({ email: '', password: '' });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axios.post('your-php-server-endpoint', signUpData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios.post('your-php-server-endpoint', signInData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='body'>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" value={signUpData.name} onChange={handleSignUpChange} />
            <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} />
            <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" name="email" placeholder="Email" value={signInData.email} onChange={handleSignInChange} />
            <input type="password" name="password" placeholder="Password" value={signInData.password} onChange={handleSignInChange} />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json");

// $input = json_decode(file_get_contents('php://input'), true);

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // Validate and process the input data
//     $name = $input['name'] ?? '';
//     $email = $input['email'] ?? '';
//     $password = $input['password'] ?? '';

//     // Here you can add code to save the data to a database, send an email, etc.

//     echo json_encode(['status' => 'success', 'message' => 'Form data received']);
// } else {
//     echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
//  }