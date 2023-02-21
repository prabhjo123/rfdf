import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Ideal_fullname from './Ideal_fullname';

const Ideal_Waste_Collector = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const [company_name, setCompany_name] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const handle_company_name = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany_name(event.target.value);
    if (event.target.value.length > 0) {
      setErrorMessage('');
    } else {
      setErrorMessage("Please enter company name.");
    }
  };

  const handleDivClick = () => {
    if (!company_name) {
      setErrorMessage("Please enter company name.");
    }  else {

    localStorage.setItem('company_name', company_name);
    setShowDiv(false);
    setShowDiv1(false);
    }
  };
  return (
    <>
    {showDiv && (
   <div className="progress-section-overriden">

    <div className="s_7">70%</div>
  </div>
 )}
     {/* <div>
      <p>Stored value: {typeof window !== 'undefined' && localStorage.getItem('postcode')}</p>
    </div> */}
    {showDiv1 ? (
      <div className="cards-section">
      <div className="card-container">
    <div className="card-spinner-company">
            <div className="card-heading">Please wait, we are searching the market for the best deal...</div>
            <div className="searching-block">
                <Image src="/images/Spinner-Waste.gif" 
                width={250}
                height={250}
                 alt="Searching" className="spinner"/>
            </div>
            <div className="card-heading">Great news! We’ve found you an ideal waste collector</div>
            <div className="card-sub-heading">We require your company name</div>
            <div className="form-block w-form">
              <form id="wf-form-Contact" name="wf-form-Contact" data-name="Contact" method="get" className="form-div">
                <input type="text" required className="input-field-error w-input" value={company_name} 
                name="Company" data-name="Company" placeholder="Company Name" id="Company" onChange={handle_company_name} />
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {/* <div className="form-message">@cardSpinnerCompany.ErrorMessage</div> */}
              </form>
              <div className="success-message w-form-done">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <a  className="continue-link w-button" onClick={handleDivClick} >Continue</a>
            <div className="timer-block">
                <Image src="/images/time_remaining_55.png" 
                width={40}
                height={40}
                loading="lazy" alt="time remaining 55 seconds" className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
          </div>
          </div>
          </div>
          ) : (
          <div>
            <Ideal_fullname/>
          </div>
            
          )}

          
</>
  )
}

export default Ideal_Waste_Collector
