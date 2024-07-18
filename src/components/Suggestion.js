import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Suggestion.css';
// import productList from '../static/data/products.js';
// import cart from '../static/data/cart.js';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Suggestion() {

    const [cart, setCart] = useState([]);

    const addtocartarray = async(response) => {
        
        await setCart(response)
        console.log(cart);
    }

    const urlcart="http://192.168.1.22/dealdive/php-server/cart.php"

    const fetchcart=()=>{
    axios.request(urlcart)
    .then(response=> addtocartarray(response.data , cart))
    .catch(error=> alert(error));
    }
  
    
  
    useEffect(() => {
      fetchcart();
      const databaseChangeListenercart = () => {
        setTimeout(fetchcart, 0); 
      };
      const intervalcart = setInterval(databaseChangeListenercart, 10000);
  
      return () => {
        clearInterval(intervalcart);
      };
    }, []);








    const [productList, setProductList] = useState([]);

    const addtoarray = async(response) => {
        await setProductList(response)
    }
    const url="http://192.168.1.22/dealdive/php-server/suggestion.php"

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
        <div className='sugg-list'>
            <h1 className='h1'>
                You might need
            </h1>
            <div className='list'>
                
                {
                    
                    productList.map((product)=>{
                        return(
                            <div key={product.pid} className='list-element'>
                                <Link className="Linkp" to={"/productpage/"+product.pid}>
                                <img className="list-element-img" src={product.img}/>    
                                <p className="item-name">{product.name}<br/>(Local store)</p>
                                </Link>
                                <p className="price">{product.price}$</p>
                                
                                {
                                    cart.includes(product.pid)
                                    ?
                                    <>
                                        <div className='add-buttton' >
                                            <div className='chevron-left'>-</div>
                                            <div className='chevron-right'>+</div>
                                        </div>
                                        <p className='show'>{cart.reduce((total,x) => total+(x==product.pid), 0)}</p>
                                    </>
                                    :
                                    <>
                                        <button className="add-buttton" id="chevron"></button> 
                                        <p className='show'>+</p>
                                    </>
                                    
                                }
                            </div>
                        );
                    })
                }

            </div>
        </div>
    </>
  )
}
