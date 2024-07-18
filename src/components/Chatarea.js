import React from 'react'
import { useHistory } from "react-router-dom";
import message from '../static/images/message.png';
import photo from '../static/images/photo.png';
import '../css/Chatarea.css';
import ChatItems from './ChatItems';
import { useState } from "react";


export default function Chatarea() {
    const [chat , setChat]=useState("");
    const [chatinput , setchatinput]=useState("");
    const history = useHistory()
    function submit(event){
        event.preventDefault()
        setChat(<><p className="chat">{chatinput}</p> <ChatItems value={chatinput}/></>)
        setchatinput("")
    }
    
  return (
    
    <div className='chat-body'>
        <div className='chatarea'>
            <div className='chatarea-top'>
                <button className='back' onClick={()=>{history.goBack()}}> &lt; </button>
                chat bot 
                <button className='back' > : </button>
            </div>
            <div className='cahtmid'>

                {chat}

            </div>
            <form className='chatarea-bottom' onSubmit={submit}>
                <button className='back photo'> 
                    <img src={photo}/>
                </button>
                <input className="inputc" type='text'  value={chatinput} onChange={(e)=>{setchatinput(e.target.value)}} placeholder='type what you want'/>
                <button className='back send' >  
                    <img src={message}/>
                </button>
            </form>
        </div>
    </div>
  )
}
