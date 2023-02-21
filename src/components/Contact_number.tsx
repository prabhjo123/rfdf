import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRef} from "react";


const Contact_number = () => {
  const formRef = useRef(null);
  const [validContact, setValidContact] = useState(false);
  const [Contact_number, setContact] = useState('');
  const [showDiv, setShowDiv] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handle_contact_number = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.target.value);
    if (event.target.value.length > 0) {
      setErrorMessage('');
    }  if (/^[0-9]+$/.test(event.target.value)) {
      setValidContact(true);
    } else {
      setValidContact(false);
    }
  };

  const handleSubmit = () => {
  localStorage.setItem('contact_number', Contact_number );


  if (validContact) {
    const myKey1 = localStorage.getItem('myKey1');
    const ongoing = localStorage.getItem('ongoing');
    const waste_collection = localStorage.getItem('waste_collection');
    const business_premises = localStorage.getItem('business_premises');
    const your_waste_collection = localStorage.getItem('your_waste_collection');
    const postcode = localStorage.getItem('postcode');
    const company_name = localStorage.getItem('company_name');
    const full_name = localStorage.getItem('full_name');
    const email = localStorage.getItem('email');
    const contact_number = localStorage.getItem('contact_number');
   
   //alert(contact_number);
    fetch('/api/submit-lead', {
      method: 'POST',
      body: JSON.stringify({myKey1,ongoing,waste_collection,business_premises,your_waste_collection,postcode,company_name,full_name,email,contact_number}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(response => response.json())
      .then(data => {console.log(data);
      //alert(JSON.stringify(data));
      if (formRef.current) {
        formRef.current.submit();
      }

      })
      .catch(error => console.error(error));
 // Do something with the valid input
} else {
  setErrorMessage("Please enter number.");
}
     
  };

  const handleDivClick = () => {
    
    if (!Contact_number) {
      setErrorMessage("Please enter your phone number");
    }  else {
    setShowDiv(false);
    }

  };

  return (
    <>
     {showDiv && (
   <div className="progress-section-overriden">
    <div className="s_9">90%</div>
  </div>
 )}
 
    <div className="cards-section">
          <div className="card-container">
    <div className ="card-contact-number">
            <div className="card-heading">Finally, please provide your contact number</div>
            <div className="card-sub-heading">We require your number to provide you with a personalised quote</div>
            <div className="form-block w-form">
              <form id="wf-form-Contact-2" name="wf-form-Contact-2" data-name="Contact" method="get" className="form-div">
                <input type="text" required className="input-field w-input"  value={Contact_number}
                name="ContactNumber-2" data-name="Contact Number 2" placeholder="Contact Number" id="ContactNumber-2"
                onChange={handle_contact_number} />
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {/* <div className="form-message">@cardContactNumber.ErrorMessage</div> */}
              </form>
              <div className="success-message w-form-done">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
    <form id="form2" method="get" action="https://www.supplierscompared.co.uk/success/" onSubmit={handleSubmit}  ref={formRef} >

      <input required  type="hidden" name='WasteC' value={typeof window !== 'undefined' && localStorage.getItem('myKey1')} />
      <input required type="hidden" name='OngoingC' value={typeof window !== 'undefined' && localStorage.getItem('ongoing')} />
      <input required type="hidden" name='estimatedStart' value={typeof window !== 'undefined' && 
      localStorage.getItem('waste_collection')} />
      <input required type="hidden" name='BusinessP' value={typeof window !== 'undefined' && 
      localStorage.getItem('business_premises')} />
      <input required type="hidden" name='collectionF' value={typeof window !== 'undefined' && 
      localStorage.getItem('your_waste_collection')} />
      <input required type="hidden" name='postcode' value={typeof window !== 'undefined' && 
      localStorage.getItem('postcode')} />
      <input required type="hidden" name='CompanyName' value={typeof window !== 'undefined' && 
      localStorage.getItem('company_name')} />
      <input required type="hidden" name='FullName' value={typeof window !== 'undefined' && 
      localStorage.getItem('full_name')} />
      <input required type="hidden" name='Email' value={typeof window !== 'undefined' && 
      localStorage.getItem('email')} />
      <input required type="hidden" name='ContactNumber' value={typeof window !== 'undefined' && 
      localStorage.getItem('contact_number')} />
    
   
  
      <button id="contact_button" className="continue-link quote w-button" type="submit" onClick={handleDivClick} >Get Quote</button>
    </form>
    <button className="continue-link quote w-button" type="submit"   onClick={handleSubmit} >Get Quote</button>


            {/* <Link className="continue-link quote w-button"  href="/success"></Link> */}
            <div className="timer-block">
                <Image src="/images/time_remaining_10.png" 
                width={40}
                height={40}
                loading="lazy" alt="time remaining 10 seconds" className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
          </div>
          </div>
          </div>
          </>
  )
}
  
 export default Contact_number
