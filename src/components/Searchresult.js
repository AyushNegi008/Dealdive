import React from "react";
// import cart from '../static/data/cart.js';
import { Link } from 'react-router-dom';
import ipAddress from '../static/ip.js';


import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Searchresult(props) {



    const [cart, setCart] = useState([]);

    const addtocartarray = async(response) => {
        await setCart(response)
    }

    const urlcart = `http://${ipAddress}/dealdive/php-server/cart.php`;
    console.log(urlcart);
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
      const intervalcart = setInterval(databaseChangeListenercart, 5000);
  
      return () => {
        clearInterval(intervalcart);
      };
    }, []);

    function apendtocart(pid){
      // setCart([...cart,pid])
      const appendurl=`http://${ipAddress}/dealdive/php-server/appendtocart.php`;
        let fData= new FormData;
        fData.append('pid', pid);

        axios.post(appendurl,fData)
        .then(response=> fetchcart())
        .catch(error=> alert(error));
    }


    function popfromcart(pid){
      // const index = cart.findIndex(item => item === pid);
      // if (index != -1) {
      //   const updatedCart = [...cart];
      //   updatedCart.splice(index, 1);
      //   setCart(updatedCart);
      // }
      const removeurl=`http://${ipAddress}/dealdive/php-server/popfromcart.php`;
      
        let fData= new FormData;
        fData.append('pid', pid);

        axios.post(removeurl,fData)
        .then(response=> fetchcart())
        .catch(error=> alert(error));
    }





    const [productList, setProductList] = useState([]);

    const addtoarray = async(response) => {
        await setProductList(response)
    }
    const url=`http://${ipAddress}/dealdive/php-server/suggestion.php`;

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
      const interval = setInterval(databaseChangeListener, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);










    return(
        <div className="search-result-list">
            {
                    
                    props.result.map((product)=>{
                        return(
                            <div className='Item' key={product.id}>
                                    <img src={product.img}/>
                                    <div className='detail'>
                                        <b>{product.name}</b><br/>{product.price}/{product.quantity}
                                    </div>
                                    <div className='countcontain'>
                                        <button className='cbtn countm' onClick={()=>{popfromcart(product.pid)}}>-</button>
                                        <div className='couont'>{cart.reduce((total,x) => total+(x==product.pid), 0)}</div>
                                        <button className='cbtn countp'  onClick={()=>{apendtocart(product.pid)}}>+</button>
                                    </div>
                                </div>
                        );
                    })
                }
        </div>
    )
}