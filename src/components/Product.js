import React from 'react'
import Discription from "./Discription.js";
import productList from '../static/data/products.js';
import  '../css/product.css';

export default function Product(props) {
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

