import React from 'react'
import { useHistory } from "react-router-dom";
import message from '../static/images/message.png';
import photo from '../static/images/photo.png';
import '../css/Chatarea.css';


export default function Chatarea() {
    const history = useHistory()


  return (
    
    <div className='chat-body'>
        <div className='chatarea'>
            <div className='chatarea-top'>
                <button className='back' onClick={()=>{history.goBack()}}> &lt; </button>
                chat bot 
                <button className='back' > : </button>
            </div>
            
            <div className='chatarea-bottom'>
                <button className='back photo'> 
                    <img src={photo}/>
                </button>
                <input className="inputc" type='text' placeholder='type what you want'/>
                <button className='back send' >  
                    <img src={message}/>
                </button>
            </div>
        </div>
    </div>
  )
}
