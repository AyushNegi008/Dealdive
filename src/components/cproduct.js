import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Suggestion.css';
import '../css/dproduct.css';
import '../css/cproduct.css';
import ipAddress from '../static/ip.js';
// import productList from '../static/data/products.js';
// import cart from '../static/data/cart.js';



import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Cproduct() {


    const[cetegeory, setCetegeory]=useState("Fruits")

    
    














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
    let fData= new FormData;
      fData.append('search', cetegeory);

      axios.post(url,fData)
      .then(response=> addtoarray(response.data , productList))
      .catch(error=> alert(error));
    }
  
    
  
    useEffect(() => {
      fetch()
      
    }, [cetegeory]);
    




  return (
    <>
        <div className='sugg-list'>
        <h1 className='h1'>
                choose category
            </h1>
            <div className='cet-list' id="cet">
                <div className={cetegeory=="Fruits" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Fruits")}}>Fruits</div>
                <div className={cetegeory=="Poultry" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Poultry")}}>Poultry</div>
                <div className={cetegeory=="Vegetables" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Vegetables")}}>Vegetables</div>
                <div className={cetegeory=="Bakery" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Bakery")}}>Bakery</div>
                <div className={cetegeory=="Dairy" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Dairy")}}>Dairy</div>
                <div className={cetegeory=="Grains" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Grains")}}>Grains</div>
                <div className={cetegeory=="Beverages" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Beverages")}}>Beverages</div>
                <div className={cetegeory=="Meat" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Meat")}}>Meat</div>
                <div className={cetegeory=="Pasta" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Pasta")}}>Pasta</div>
                <div className={cetegeory=="Seafood" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Seafood")}}>Seafood</div>
                <div className={cetegeory=="Breakfast" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Breakfast")}}>Breakfast</div>
                <div className={cetegeory=="Baking" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Baking")}}>Baking</div>
                <div className={cetegeory=="Spices" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Spices")}}>Spices</div>
                <div className={cetegeory=="Cooking Oils" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Cooking Oils")}}>Cooking Oils</div>
                <div className={cetegeory=="Condiments" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Condiments")}}>Condiments</div>
                <div className={cetegeory=="Sweeteners" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Sweeteners")}}>Sweeteners</div>
                <div className={cetegeory=="Spreads" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Spreads")}}>Spreads</div>
                <div className={cetegeory=="Nuts" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Nuts")}}>Nuts</div>
                <div className={cetegeory=="Dried Fruits" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Dried Fruits")}}>Dried Fruits</div>
                <div className={cetegeory=="Sweets" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Sweets")}}>Sweets</div>
                <div className={cetegeory=="Canned Goods" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Canned Goods")}}>Canned Goods</div>
                <div className={cetegeory=="Pulses" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Pulses")}}>Pulses</div>
                <div className={cetegeory=="Herbs & Spices" ? "chooise-btn select" : "chooise-btn"} onClick={(e)=>{setCetegeory("Herbs & Spices")}}>Herbs & Spices</div>
                



                
            </div>


            <div className='list noslide'>
                
                {
                    
                    productList.map((product)=>{
                        return(
                            

                            
                            
                            <div key={product.pid} className='list-element no-margin'>
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
                                            <div className='chevron-left' onClick={()=>{popfromcart(product.pid)}}>-</div>
                                            <div className='chevron-right' onClick={()=>{apendtocart(product.pid)}}>+</div>
                                        </div>
                                        <p className='show'>{cart.reduce((total,x) => total+(x==product.pid), 0)}</p>
                                    </>
                                    :
                                    <>
                                        <button className="add-buttton" id="chevron" onClick={()=>{apendtocart(product.pid)}} ></button> 
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
