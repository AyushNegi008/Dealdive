import Searchresult from './Searchresult.js';
import ipAddress from '../static/ip.js';

import React ,{useState, useEffect} from 'react';
import axios from 'axios';


import {BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom'; 
import '../css/Navbar.css'
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


export default function Navbar(props) {
  const [navStatus, setNavStatus] = useState("d-dis");
  const [searchbody, setSearchbody] = useState("search-body");
  const [inputsearch, setInputSearch] = useState("");
  const [sresult, setSresult]=useState([])

  async function changesize() {
    if (inputsearch == "" || inputsearch == null ) {
      console.log(inputsearch);
      setSearchbody("search-body");
    } else {
      setSearchbody("");
    }
  }


  const addtosresult = async(response) => {
      await setSresult(response)
  }

  const urlsearch=`http://${ipAddress}/dealdive/php-server/search.php`
  const resetresult=()=>{
    let fData= new FormData;
    fData.append('search', inputsearch);

    axios.post(urlsearch,fData)
    .then(response=> addtosresult(response.data , sresult))
    .catch(error=> alert(error));
    
  }


  useEffect(() => {
    changesize();
    resetresult();
    
    
  }, [inputsearch]);

  return (
    <>
      <nav className="nav">
        <div className='ul'>
          <img className="td" src={td} onClick={()=>{navStatus=="dis"?setNavStatus("d-dis"):setNavStatus("dis")}}/>
          <img className="ldealdive" src={ldealdive}/>
          <div className='li'>{props.name}</div>
          <input className='input' placeholder=' 🔍    search' value={inputsearch} onChange={(e)=>{setInputSearch(e.target.value)}} ></input>
          <div className='p'> <p className="yellow">⚡</p> order now and get within <p className="yellow">15 min</p></div>
          
          <Link to="cart" className="carta">
            <img className="cart" src={cart}/>
          </Link>
          <Link to="cart" className="persona">
            <img className="person" src={person}/>
          </Link>
        </div>
        <div className={navStatus}>

          <Link to="scan" className='onel' onClick={()=>{setNavStatus("d-dis")}}> 
            <img className='more-img' src={scanw}></img>
            <div className='more-text'>scan</div>
          </Link>
          <Link to="chatbot" className='onel' onClick={()=>{setNavStatus("d-dis")}}>
            <img className='more-img' src={botw}></img>
            <div className='more-text'>chatbot</div>
          </Link>
          
          <Link to="orders" className='onel' onClick={()=>{setNavStatus("d-dis")}}>
            <img className='more-img' src={orderw}></img>
            <div className='more-text'>orders</div>
          </Link>
          <Link to="account" className='onel profile'> 
            <img className='more-img' src={person}></img>
            <div className='more-text'>account</div>
          </Link>
          
        </div>
        
      </nav>
      <div className={searchbody+" search-body-max"}>
          <Searchresult result={sresult}/>
      </div>
      </>
    
  )
}
