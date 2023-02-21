import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Your_Waste_Collection from './Your_Waste_Collection';


const Business = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('waste_collection') || '';
    }
    return '';
  });

  const business_premises1 = () => {
    const newValue = "Yes";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('business_premises', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const business_premises2 = () => {
    const newValue = "No";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('business_premises', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };
  
  return (
    <>
    {showDiv && (
       <div className="progress-section-overriden">
         <div className="s_4">40%</div>
      </div>
 )}
    {showDiv1 ? (
      <div className="cards-section">
      <div className="card-container step3">

      <div className="wastecard-1-labels">
      <div className="card-heading">Is this request for a business premises?</div>

      <div className="waste-collection">

      <div className="choice-block" onClick={business_premises1}>
        <div  className="choice-button-label">
          <div className="choice-button-text">Yes</div>
         </div>
      </div>

      <div className="choice-block" onClick={business_premises2}>
        <div className="choice-button-label">
          <div className="choice-button-text">No</div>
        </div>
      </div>
      
      </div>
      <div className="timer-block">
          <Image src="/images/time_remaining_40.png"
           width={40}
           height={40}  
          loading="lazy" 
          alt="time remaining 40 seconds"
           className="timer-image"/>
        <h2 className="timer-text">seconds left...</h2>
      </div>
    </div>
    </div>
    </div>
      ) : (
        <div>
         <Your_Waste_Collection/>
        </div>
      )}
    </>
  )
}

export default Business
