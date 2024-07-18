import React from 'react'
import '../css/Items.css';
import productList from '../static/data/products.js';


export default function Items() {
  return (
    <div className='item-list-box'>
        <div className='item-list'>
        {
                    
            productList.slice([0], [9]).map((product)=>{
                return(
                    
                        <div className='Item' key={product.pid}>
                            <img src={product.img}/>
                            <div className='detail'>
                                <b>{product.name}</b><br/>{product.price}/{product.quantity}
                            </div>
                            <div className='countcontain'>
                                <button className='cbtn countm'>-</button>
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
