import React from 'react'
import productList from '../static/data/products.js';
import  '../css/Discription.css';

export default function Discription(props) {
  return (
    <div className='flex'>

        <h1 className='h1'>{props.product.name} <br/> <h6>({props.product.cetegeory})</h6></h1>
        <h5>({props.product.store})</h5>
        <p className='dsc-p'>{props.product.quantity}</p>
        <h6>{props.product.disc}</h6>

        <h2 className='price-text h1'>{props.product.price}₹ /<h6 className='dsc-p'>{props.product.quantity}</h6></h2>
        <h6 className='price-text'>rating 4.5(19)</h6>

        <button className='btn-warning'>add to cart</button>

        <br/>
        <h2 className='h2'>About This Item:</h2>
        <br/>
        <h5>Ingredients</h5>
        <p>{props.product.ingredient}</p>

        <br/>
        <h5>Disclamer</h5>
        <p>Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>

        

    </div>
  )
}
