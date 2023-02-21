import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Contact_number from './Contact_number';

const Ideal_fullname = () => {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv, setShowDiv] = useState(true);

    
    const [validEmail, setValidEmail] = useState(false);

    const [full_name, setFull_name] = useState('');
    const [email, setEmail] = useState('');

    const [errorMessage, setErrorMessage] = useState("");
    const [emailerrorMessage, setEmailerrorMessage] = useState("");

    const handle_full_name = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFull_name(event.target.value);
      if (event.target.value.length > 0) {
        setErrorMessage('');
      } else {
       
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      if (event.target.value.length > 0) {
        setEmailerrorMessage('');
      } 
      if (/\S+@\S+\.\S+/.test(event.target.value)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    };

    const handleDivClick = () => {
  
      if (!full_name && !email) {
        setErrorMessage("Please enter your name");
        setEmailerrorMessage("Please enter your email");
      } else if (!validEmail) {
        setErrorMessage('');
        setEmailerrorMessage("Please Enter valid email.");
      }  else {
      localStorage.setItem('full_name', full_name );
      localStorage.setItem('email', email);
      setShowDiv(false);
      setShowDiv1(false);

      }
    };

  return (
    <>
    {showDiv && (
   <div className="progress-section-overriden">
    
    <div className="s_8">80%</div>
    {/* {showDiv && (
    <div className="s_2">20%</div>
    )}
    <div className="s_3">30%</div>
    <div className="s_4">40%</div>
    <div className="s_5">50%</div>
    <div className="s_6">60%</div>
    <div className="s_7">70%</div>
    <div className="s_8">80%</div>
    <div className="s_9">90%</div>
    <div className="s_10">100%</div> */}

  </div>
 )}

    {/* <div>
      <p>Stored value: {typeof window !== 'undefined' && localStorage.getItem('company_name')}</p>
    </div> */}

    {showDiv1 ? (
    <div className="cards-section">
          <div className="card-container">
            <div  className="card-spinner-name-email">
          <div className="card-heading">Please wait, we are searching the market for the best deal...</div>
          <div className="searching-block">
    <Image src="/images/Spinner-Waste.gif" 
    width={250}
    height={250}
     alt="Searching" className="spinner"/>
     </div>
<div className="card-heading">Great news! We’ve found you an ideal waste collector</div>
<div className="card-sub-heading">We require your full name and email</div>
<div className="form-block w-form">
  <form id="wf-form-Name1" name="wf-form-Contact" data-name="Contact" 
  method="get" className="form-div">
    <input type="text" required className="input-field w-input" name="FullName-2"
     data-name="Full Name 2" placeholder="Full Name" id="FullName1" value={full_name} onChange={handle_full_name} />
     {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
     <input type="email" required className="input-field-error w-input" 
     name="Email-2" data-name="Email 2" placeholder="Email Addres" id="Email1" value={email} onChange={handleChange} />
     {emailerrorMessage && <div style={{ color: "red" }}>{emailerrorMessage}</div>}
  </form>
  <div className="success-message w-form-done">
    <div>Oops! Something went wrong while submitting the form.</div>
  </div>
  <div className="error-message w-form-fail">
    <div>Oops! Something went wrong while submitting the form.</div>
  </div>
</div>
<a className="continue-link w-button" onClick={handleDivClick}>Continue</a>
<div className="timer-block">
    <Image src="/images/time_remaining_20.png" 
     width={40}
     height={40}
    loading="lazy" alt="time remaining 20 seconds" className="timer-image"/>
  <h2 className="timer-text">seconds left...</h2>
</div>
</div>
</div>
</div>
) : (
    <div>
      <Contact_number/>
    </div>
      
    )}
</>
  )
}

export default Ideal_fullname
