import React from 'react'
import '../css/ChatItems.css';
import productList from '../static/data/products.js';


export default function ChatItems() {
  return (
    <div className='item-list-box'>
        <div className='item-listm'>
        {
                    
            productList.slice([0], [9]).map((product)=>{
                return(
                    
                        <div className='Item' key={product.pid}>
                            <img className='itemimgm' src={product.img}/>
                            <div className='detail'>
                                <b>{product.name}</b><br/>{product.price}/{product.quantity}
                            </div>
                            <div className='countcontain'>
                                <button className='cbtnm countm'>-</button>
                                <div className='couont'>2</div>
                                <button className='cbtn countp'>+</button>
                            </div>
                        </div>
                    
                )
            })
        
        }
        </div>
            
        
    </div>
  )
}
