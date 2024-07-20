import React from 'react'
import '../css/Items.css';
// import productList from '../static/data/products.js';
import ipAddress from '../static/ip.js';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Items() {



    const [cartobj, setCartObj]=useState([]);

    const [cart, setCart] = useState([]);

    const addtocartarray = async(response) => {
        await setCart(response)
    }

    const urlcart=`http://${ipAddress}/dealdive/php-server/cart.php`
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

    const url=`http://${ipAddress}/dealdive/php-server/cproduct.php`

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












    useEffect(() => {
        const frequencyMap = cart.reduce((acc, num) => {
          if (acc[num]) {
            acc[num]++;
          } else {
            acc[num] = 1;
          }
          return acc;
        }, {});
    
        const result = Object.keys(frequencyMap).map(key => ({
          id: parseInt(key), 
          freq: frequencyMap[key]
        }));

        setCartObj(result);
        console.log(result);

      }, [cart]);


      const findProductByPid = (products, pid) => {
        return  products.find(product => product.pid == pid);
      };



  return (
    <div className='item-list-box'>
        <div className='item-list'>
        {
            cartobj.map((item)=>{
                
                if(!isNaN(item.id)){
                    const product = findProductByPid(productList, ""+item.id+"");
                    if (product) {

                        return(

                                <div className='Item' key={item.id}>
                                    <img src={product.img}/>
                                    <div className='detail'>
                                        <b>{product.name}</b><br/>{product.price}/{product.quantity}
                                    </div>
                                    <div className='countcontain'>
                                        <button className='cbtn countm' onClick={()=>{popfromcart(product.pid)}}>-</button>
                                        <div className='couont'>{item.freq}</div>
                                        <button className='cbtn countp' onClick={()=>{apendtocart(product.pid)}}>+</button>
                                    </div>
                                </div>
                            
                        )
                    }
                    else{
                        return null;
                    }
                }
                else{
                    return null;
                }
            })
        
        }
        </div>
            
        
    </div>
  )
}
