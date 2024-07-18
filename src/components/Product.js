import React from 'react'
import Discription from "./Discription.js";
// import productList from '../static/data/products.js';
import  '../css/product.css';



import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Product(props) {

    

    const [productList, setProductList] = useState([]);

    const addtoarray = async(response) => {
        await setProductList(response)
    }

    const url="http://192.168.1.22/dealdive/php-server/product.php"

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

