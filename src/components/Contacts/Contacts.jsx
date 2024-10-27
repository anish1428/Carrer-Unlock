import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Contacts.css'
import '../../index.css'
import msgicon from "../../assets/images/msg-icon.png"
import phoneicon from "../../assets/images/phone-icon.png"
import mailicon from "../../assets/images/mail-icon.png"
import locationicon from "../../assets/images/location-icon.png"
const Contacts = () => {
  const [result, setResult] = React.useState("");
  const[thank,setThank]=useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "408f9d07-b418-40c8-8b07-400d47026291");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setThank(true);
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <Navbar />
      
      <div className='contact-cont'>
      
        <div className="contact-col">
          <h3>Send us a message <img src={msgicon} alt="" /></h3>
          <p>We value your feedback, questions, and suggestions as we strive to deliver exceptional service to our university community. Please use our contact form or the information below to get in touch with us. Your input is instrumental in helping us improve and excel.</p>
          <ul>
            <li><img src={mailicon} alt="" /><a href="mailto:carrerunlock@gmail.com">carrerunlock@gmail.com</a> </li>
            <li><img src={phoneicon} alt="" />+91 95462 93955</li>
             <li>Feel free to reach out to us through direct messaging or by calling. We're here to assist you!</li>
            
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
            <label >Write Your Messages Here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn-submit'>Submit now</button>
          </form>
          <span>{result}</span>
          <span>{thank && <div>Thank you for reaching out to us! &#10084;</div>}</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
