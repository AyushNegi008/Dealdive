import React from 'react'
import Discription from "./Discription.js";
// import productList from '../static/data/products.js';
import  '../css/product.css';
import ipAddress from '../static/ip.js';



import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Product(props) {

  // const [ipAddress, setIPAddress] = useState('')

  // useEffect(() => {
  //   fetch('https://api.ipify.org?format=json')
  //     .then(response => response.json())
  //     .then(data => setIPAddress(data.ip))
  //     .catch(error => console.log(error))
  // }, []);




    const [productList, setProductList] = useState([]);

    const addtoarray = async(response) => {
        await setProductList(response)
    }

    const url=`http://${ipAddress}/dealdive/php-server/product.php`

    const fetch=()=>{
    axios.request(url)
    .then(response=> addtoarray(response.data , productList))
    .catch(error=> alert(error));
    }
  
    
  
    useEffect(() => {
      fetch();
      
      const databaseChangeListener = () => {
        
        setTimeout(fetch, 0); 
      };
      const interval = setInterval(databaseChangeListener, 10000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);



  return (
    <>
        {
            productList.map((product)=>{
                if(product.pid==props.slug){
                    return(
                        <div className='main-p'>
                            <div className='main-p-img'>
                                <img className="p-img" src={product.img} />   
                            </div>

                            <Discription product={product}/>
                        </div>
                    )
                }
            })
        }
    </>
  )
}

