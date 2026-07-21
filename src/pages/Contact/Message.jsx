import React, { useRef, useState } from 'react'

 import emailjs from '@emailjs/browser';

 const Message= () => {
 
 const [msg,setMsg]=useState({user_name:"",user_email:"",message:""})
 const {user_name,user_email,message}=msg;

 const form = useRef();
   const handle=(e)=>{
  setMsg({...msg,[e.target.name]:e.target.value})
 }

   const submit=(e)=>{
    e.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS is not configured. Set VITE_EMAILJS_* env vars.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey })
    .then((result)=>console.log(result.text))
    .catch(error=>console.log("display error",error))

    setMsg({user_name:"",user_email:"",message:""})
}

     return (
      
      
        <div style={{border:"2px solid red",background:"green",width:"800px",height:"500px"}}>
      

      <div style={{background:"lightblue", height:"200px", width:"200px",padding:"40px",margin:"100px 180px"}}>

      <form ref={form} onSubmit={submit} >
      <label htmlFor="user_name"> subject</label><br/>
      <input id="user_name" type='text' name='user_name' value={user_name} onChange={handle} placeholder='subject' /><br/>

      <label htmlFor="user_email">email</label><br/>
      <input id="user_email" type='email' name='user_email' value={user_email}  onChange={handle} placeholder='email'/><br/>

      <label htmlFor="message"> message</label><br/>
      <input id="message" type='text' name='message' value={message}  onChange={handle} placeholder='message' /><br/>
      <button type='submit' value="send">submit</button>
       </form>
   

       
      </div>

       </div>
       
    
  )
}

export default Message
