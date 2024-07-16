import React from 'react'
import '../css/Cetogery.css';
import Frame from '../static/images/Frame.png';
import Rectangle from '../static/images/Rectangle.png';
import Vegetables from '../static/images/vegetables.png'
import bread from '../static/images/bread.png'
import fruits from '../static/images/healthy-food.png'
import chicken from '../static/images/chicken.png'
import milk from '../static/images/dairy-products.png'
import fbag from '../static/images/eco-bag-transformed 1.png'
import bakery from '../static/images/bakery.png'
import meat from '../static/images/meat.png'
import spicy from '../static/images/spicy.png'
import wheat from '../static/images/wheat.png'
import more from '../static/images/more.png'


export default function Cetogery() {
  return (
    <>
        <div className="front-bord">
            
            <div className='front-text'>First ever AI intergrated<br/> grocery app</div>
            <button className='btn btn-outline-success'>Shop now</button>
            <img className='Frame' src={Rectangle}/>
            <img className='frame-bag' src={fbag}/>

            <div className='front-lower'>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Vegetable</p>
                  <p className='element-text-smaller'>Local Market</p>
                  <img className="c-element-img" src={Vegetables}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Snacks & Breads</p>
                  <p className='element-text-smaller'>In store delivery</p>
                  <img className="c-element-img" src={bread}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Fruits</p>
                  <p className='element-text-smaller'>Comical free</p>
                  <img className="c-element-img" src={fruits}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Chiken</p>
                  <p className='element-text-smaller'>Frozen Meal</p>
                  <img className="c-element-img" src={chicken}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Milk & Dairy</p>
                  <p className='element-text-smaller'>Process food</p>
                  <img className="c-element-img" src={milk}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Flour</p>
                  <p className='element-text-smaller'>Local Market</p>
                  <img className="c-element-img" src={wheat}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Spices</p>
                  <p className='element-text-smaller'>Local Market</p>
                  <img className="c-element-img" src={spicy}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Bakery</p>
                  <p className='element-text-smaller'>cookeei and cake</p>
                  <img className="c-element-img" src={bakery}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">Meat</p>
                  <p className='element-text-smaller'>Frozen Meal</p>
                  <img className="c-element-img" src={meat}/>
              </div>
              <div className='front-lower-element'>
                  <p className="element-text-bigger">more</p>
                  <p className='element-text-smaller'></p>
                  <img className="c-element-img" src={more}/>
              </div>
              
            </div>
        </div>

    </>
  )
}
