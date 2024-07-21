import React from 'react'
import '../css/ChatItems.css';
// import productList from '../static/data/products.js';
import { useState, useEffect } from "react";


export default function ChatItems(props) {

    const [productList, setProductList]=useState([]);

    function get_ingredients(dish){
        if (dish=="rajma chawal"){
            setProductList([
                {
                    pid: "164",
                    name:"Cumin",
                    price:"40",
                    quantity:"500g",
                    img: "https://www.indianasapplepie.com/cdn/shop/articles/IMG-1444_1600x.jpg?v=1689862468",
                    
                  },
                  {
                    pid: "202",
                    name:"Coriander Seeds",
                    price:"89",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a4e12eae-d1c5-4a85-9ac5-2d1e008186f0.jpg?ts=1713777032",
                    
                  },
                  {
                    pid: "203",
                    name:"Cinnamon Stick",
                    price:"65",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_16598.jpg?ts=1694506105",
                    
                  },
                  {
                    pid: "204",
                    name:"Cloves",
                    price:"10",
                    quantity:"20g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525541.jpg?ts=1685970702",
                    
                  },
                  {
                    pid: "205",
                    name:"Black Cardamoms",
                    price:"149",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525533.jpg?ts=1685970701",
                    
                  },
                  {
                    pid: "206",
                    name:"Bay leaf",
                    price:"15",
                    quantity:"25g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525531.jpg?ts=1685970701",
                    
                  },
                  {
                    pid: "208",
                    name:"Red Chili Powder",
                    price:"186",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0a98843e-3326-4569-80b7-bd79c76bdd08.jpg?ts=1716882875",
                    
                  },
                  {
                    pid: "207",
                    name:"Ginger-Garlic paste",
                    price:"5",
                    quantity:"5g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/2b67a4fe-3a28-479a-9a6d-561cf71dcc2f.jpg?ts=1711017604",
                    
                  },
                  {
                    pid: "209",
                    name:"Garam Masala Powder",
                    price:"125",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_93038.jpg?ts=1684835004",
                    
                  },
                  {
                    pid: "124",
                    name:"Salt",
                    price:"20",
                    quantity:"1kg",
                    img: "https://images-cdn.ubuy.co.in/6633e99908a57e66464c54b2-morton-table-salt-all-purpose.jpg",
                    
                  },
                  {
                    pid: "110",
                    name:"Tomato",
                    price:"30",
                    quantity:"1kg",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg",
                    
                  },
                  {
                    pid: "168",
                    name:"Onions",
                    price:"30",
                    quantity:"1kg",
                    img: "https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg",
                    
                  },
                  {
                    pid: "214",
                    name:"Cooking oil",
                    price:"135",
                    quantity:"1000ml",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_482770.jpg?ts=1684833853",
                    
                  },
                  {
                    pid: "104",
                    name:"Rice",
                    price:"60",
                    quantity:"5kg",
                    img: "https://images.jdmagicbox.com/quickquotes/images_main/rice-bag-2214639878-bnfdfbsx.jpg",
                    
                  },
                  {
                    pid: "163",
                    name:"Coriander",
                    price:"30",
                    quantity:"100g",
                    img: "https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg",
                    
                  },



            ])
            
        }
        else if (dish=="chole bhature"){
            setProductList([
                {
                    pid: "210",
                    name:"Besan",
                    price:"105",
                    quantity:"1kg",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/06b454d0-026b-4fdf-b66f-dc66c814ffc6.jpg?ts=1707312305",
                    
                  },
                  {
                    pid: "109",
                    name:"Yogurt",
                    price:"40",
                    quantity:"500g",
                    img: "https://www.feastingathome.com/wp-content/uploads/2023/08/homemade-yogurt-2.jpg",
                    
                  },
                  {
                    pid: "148",
                    name:"Water",
                    price:"20",
                    quantity:"1L",
                    img: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/11178-Different_types_of_water_thumbnail-732x549-1-732x549.jpg",
                    
                  },
                  {
                    pid: "129",
                    name:"Mustard",
                    price:"60",
                    quantity:"200g",
                    img: "https://m.media-amazon.com/images/I/61TmXHj2qcL.jpg",
                    
                  },
                  {
                    pid: "213",
                    name:"Hing",
                    price:"100",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0dd36b32-4575-4ff2-b45a-c2db4acc0ed8.jpg?ts=1711099599",
                    
                  },
                  {
                    pid: "214",
                    name:"Cooking oil",
                    price:"135",
                    quantity:"1000ml",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525531.jpg?ts=1685970701",
                    
                  },
                  {
                    pid: "208",
                    name:"Red Chili Powder",
                    price:"186",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0a98843e-3326-4569-80b7-bd79c76bdd08.jpg?ts=1716882875",
                    
                  },
                  {
                    pid: "211",
                    name:"Maida",
                    price:"15",
                    quantity:"1000g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_378916.jpg?ts=1684836095",
                    
                  },
                  {
                    pid: "215",
                    name:"coriander powder",
                    price:"100",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/5e0d74bf-2087-436f-a44e-b1e6e48206de.jpg?ts=1716882880",
                    
                  },
                  {
                    pid: "124",
                    name:"Salt",
                    price:"20",
                    quantity:"1kg",
                    img: "https://images-cdn.ubuy.co.in/6633e99908a57e66464c54b2-morton-table-salt-all-purpose.jpg",
                    
                  },
                  {
                    pid: "110",
                    name:"Tomato",
                    price:"30",
                    quantity:"1kg",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg",
                    
                  },
                  {
                    pid: "168",
                    name:"Onions",
                    price:"30",
                    quantity:"1kg",
                    img: "https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg",
                    
                  },
                  {
                    pid: "163",
                    name:"Coriander",
                    price:"30",
                    quantity:"100g",
                    img: "https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg",
                    
                  }

            ])
        }
        else if (dish=="idli sambar"){

            setProductList([
                {
                     pid: "104",
                    name:"Rice",
                    price:"60",
                    quantity:"5kg",
                    img: "https://images.jdmagicbox.com/quickquotes/images_main/rice-bag-2214639878-bnfdfbsx.jpg",
                    
                  },
                  {
                    pid: "218",
                    name:"urad dal",
                    price:"85",
                    quantity:"1000g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_527603.jpg?ts=1700480144",
                    
                  },
                  {
                    pid: "219",
                    name:"Fenugreek Seeds",
                    price:"85",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/6a3036d6-48bf-4742-9572-0412e6ce8f97.jpg?ts=1712064936",
                    
                  },
                  {
                    pid: "220",
                    name:"Toor Dal",
                    price:"234",
                    quantity:"1000g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_24304.jpg?ts=1700477879",
                    
                  },
                  {
                    pid: "213",
                    name:"Hing",
                    price:"100",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0dd36b32-4575-4ff2-b45a-c2db4acc0ed8.jpg?ts=1711099599",
                    
                  },
                  {
                    pid: "214",
                    name:"Cooking oil",
                    price:"135",
                    quantity:"1000ml",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_482770.jpg?ts=1684833853",
                    
                  },
                  {
                    pid: "208",
                    name:"Red Chili Powder",
                    price:"186",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0a98843e-3326-4569-80b7-bd79c76bdd08.jpg?ts=1716882875",
                    
                  },
                  {
                    pid: "211",
                    name:"Maida",
                    price:"15",
                    quantity:"1000g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_378916.jpg?ts=1684836095",
                    
                  },
                  {
                    pid: "225",
                    name:"Sambar Masala",
                    price:"136",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/5681247a-3c32-496a-88ee-354a6ace0b3e.jpg?ts=1708591253",
                    
                  },
                  {
                    pid: "124",
                    name:"Salt",
                    price:"20",
                    quantity:"1kg",
                    img: "https://images-cdn.ubuy.co.in/6633e99908a57e66464c54b2-morton-table-salt-all-purpose.jpg",
                    
                  },
                  {
                    pid: "110",
                    name:"Tomato",
                    price:"30",
                    quantity:"1kg",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg",
                    
                  },
                  {
                    pid: "168",
                    name:"Onions",
                    price:"30",
                    quantity:"1kg",
                    img: "https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg",
                    
                  },
                  {
                    pid: "163",
                    name:"Coriander",
                    price:"30",
                    quantity:"100g",
                    img: "https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg",
                    
                  },
                  {
                    pid: "212",
                    name:"Mustard seeds",
                    price:"60",
                    quantity:"200g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525532.jpg?ts=1685970701",
                    
                  }

            ])
        }
         

        
        else if (dish=="pav bhaji"){
            setProductList([
                {
                    pid: "9",
                    name:"Potato",
                    price:"40",
                    quantity:"1kg",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/6e01f1d0-454d-46a6-85f9-8866b0875eed.jpg?ts=1711473366",
                    
                  },
                  {
                    pid: "202",
                    name:"Coriander Seeds",
                    price:"89",
                    quantity:"100g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a4e12eae-d1c5-4a85-9ac5-2d1e008186f0.jpg?ts=1713777032",
                    
                  },
                  
                  {
                    pid: "224",
                    name:"pav",
                    price:"85",
                    quantity:"200g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_65677.jpg?ts=1684835587",
                    
                  },
                  {
                    pid: "223",
                    name:"pav Bhaji Masala",
                    price:"90",
                    quantity:"200g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_10906.jpg?ts=1684834747",
                    
                  },
                  {
                    pid: "113",
                    name:"butter",
                    price:"50",
                    quantity:"200g",
                    img: "https://www.allrecipes.com/thmb/4r0EnOqfO2AZEyjAb6GtUGAVPn4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_107521418-2000-d41554ac575447449a1ebbc93835cef8.jpg",
                    
                  },
                  {
                    pid: "208",
                    name:"Red Chili Powder",
                    price:"186",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0a98843e-3326-4569-80b7-bd79c76bdd08.jpg?ts=1716882875",
                    
                  },
                  {
                    pid: "207",
                    name:"Ginger-Garlic paste",
                    price:"5",
                    quantity:"5g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/2b67a4fe-3a28-479a-9a6d-561cf71dcc2f.jpg?ts=1711017604",
                    
                  },
                  {
                    pid: "209",
                    name:"Garam Masala Powder",
                    price:"125",
                    quantity:"250g",
                    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_93038.jpg?ts=1684835004",
                    
                  },
                  {
                    pid: "124",
                    name:"Salt",
                    price:"20",
                    quantity:"1kg",
                    img: "https://images-cdn.ubuy.co.in/6633e99908a57e66464c54b2-morton-table-salt-all-purpose.jpg",
                    
                  },
                  {
                    pid: "110",
                    name:"Tomato",
                    price:"30",
                    quantity:"1kg",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg",
                    
                  },
                  {
                    pid: "168",
                    name:"Onions",
                    price:"30",
                    quantity:"1kg",
                    img: "https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg",
                    
                  },
                  {
                    pid: "167",
                    name:"Lemons",
                    price:"60",
                    quantity:"1000kg",
                    img: "https://www.starhealth.in/blog/wp-content/uploads/2022/12/01-4.jpg",
                    
                  },
                  {
                    pid: "104",
                    name:"Rice",
                    price:"60",
                    quantity:"5kg",
                    img: "https://images.jdmagicbox.com/quickquotes/images_main/rice-bag-2214639878-bnfdfbsx.jpg",
                    
                  },
                  {
                    pid: "163",
                    name:"Coriander",
                    price:"30",
                    quantity:"100g",
                    img: "https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg",
                    
                  },



            ])
            
            
        }
    }


    useEffect(() => {
        get_ingredients(props.value)
      }, [props.value]);


    


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
