import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Business from './Business';

const WantWasteCollection = () => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('waste_collection') || '';
    }
    return '';
  });
  const [showDiv, setShowDiv] = useState(true);
  const want_waste_collection1 = () => {
    const newValue = "ASAP";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const want_waste_collection2 = () => {
    const newValue = "Within 1 month";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('waste_collection', newValue);
    }

    setShowDiv(false);
    setShowDiv1(false);
  };

  const want_waste_collection3 = () => {
    const newValue = "1-3 Months";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const want_waste_collection4 = () => {
    const newValue = "3+ Months";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const [showDiv1, setShowDiv1] = useState(true);

  return (
    <>

    {showDiv && (
    <div className="progress-section-overriden">
        <div className="s_3">30%</div>
      </div>
    )}
    
     {showDiv1 ? (
      <div className="cards-section">
      <div className="card-container step3">
      <div className ="wastecard-1-labels">
            <div className="card-heading">When do you want your waste collected? </div>
            <div className="waste-collection">

            <div className="choice-block" onClick={want_waste_collection1} >
              <div className="choice-button-label">
                <div className="choice-button-text">ASAP</div>
              </div>
            </div>

            <div className="choice-block" onClick={want_waste_collection2}>
              <div className="choice-button-label">
                <div className="choice-button-text">Within 1 month</div>
              </div>
            </div>

            <div className="choice-block" onClick={want_waste_collection3}>
              <div className="choice-button-label">
                <div className="choice-button-text">1-3 Months</div>
              </div>
              </div>
              
              <div className="choice-block" onClick={want_waste_collection4}>
              <div className="choice-button-label">
                <div className="choice-button-text">3+ Months</div>
              </div>
              </div>

            </div>
            
            <div className="timer-block">
              <Image src="/images/time_remaining_35.png" 
              loading="lazy" 
              width={40}
              height={40} 
              alt="time remaining 35 seconds" 
              className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>

          </div>
          </div>
          </div>
          ) : (
            <div>
              <Business/>
            </div>
          )}
          </>
  )
}

export default WantWasteCollection
