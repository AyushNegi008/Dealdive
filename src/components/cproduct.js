import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Suggestion.css';
import '../css/dproduct.css';
import '../css/cproduct.css';
import productList from '../static/data/products.js';
import cart from '../static/data/cart.js';

export default function cproduct() {
  return (
    <>
        <div className='sugg-list'>
        <h1 className='h1'>
                choose category
            </h1>
            <div className='cet-list'>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn select'>fruits</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                <div className='chooise-btn'>vege</div>
                
            </div>


            <div className='list noslide'>
                
                {
                    
                    productList.map((product)=>{
                        return(
                            

                            
                            product.cetegeory=="fruit"
                            ?
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
                            :
                            ""



                            
                        );
                    })
                }

            </div>
        </div>
    </>
  )
}
