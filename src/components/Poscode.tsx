import React from 'react';
import Image from 'next/image';
import { useState} from 'react';
import Ideal_Waste_Collector from './Ideal_Waste_Collector';

const Poscode = () => {
  const [name, setName] = useState('');
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const handle_postcode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value.length > 0) {
      setErrorMessage('');
    } else {
     
    }
  };

  const handleClick = () => {
    if (!name) {
      setErrorMessage("Please enter postcode");
    }  else {
    localStorage.setItem('postcode', name);
    setShowDiv(false);
    setShowDiv1(false);
    }
   

  };

 
  return (
    <>
    {showDiv && (
  <div className="progress-section-overriden">
    <div className="s_6">60%</div>
  </div>
 )}
    {/* <div> 
     <p>Stored value: {typeof window !== 'undefined' && localStorage.getItem('your_waste_collection')}</p>
   </div> */}
    {showDiv1 ? (
      <div className="cards-section">
      <div className="card-container">
    <div className="card-postcode">
            <div className="card-heading">What is your postcode?</div>
            <div className="form-block w-form">
              <form id="wf-form-Postcode" name="wf-form-Postcode" data-name="Postcode"  className="form-div">
                <input type="text" required className="input-field w-input" value={name} 
                name="Postcode" data-name="Postcode" placeholder="Postcode" id="Postcode" onChange={handle_postcode} />
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {/* <div className="form-message">@cardPostcode.ErrorMessage</div> */}
              </form>
              <div className="success-message w-form-done">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <a className="continue-link w-button" onClick={handleClick} >Continue</a>
            <div className="timer-block">
                <Image 
                src="/images/time_remaining_30.png"
                 width={40}
                 height={40}
                 loading="lazy" alt="time remaining 30 seconds" 
                 className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
          </div>
          </div>
          </div>
          ) : (
            <div>
              <Ideal_Waste_Collector/>
            </div>
          )}
          </>
  )
}

export default Poscode
