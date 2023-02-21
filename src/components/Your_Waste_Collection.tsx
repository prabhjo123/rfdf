import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Poscode from './Poscode';

const Your_Waste_Collection = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('your_waste_collection') || '';
    }
    return '';
  });

  const your_waste_collection1 = () => {
    const newValue = "Once a week";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('your_waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const your_waste_collection2 = () => {
    const newValue = "2 times a week";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('your_waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const your_waste_collection3 = () => {
    const newValue = "3 times a week";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('your_waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const your_waste_collection4 = () => {
    const newValue = "Other/Unsure";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('your_waste_collection', newValue);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  return (
    <>
    {showDiv && (
    <div className="progress-section-overriden">
       <div className="s_5">50%</div>
    </div>
   )}

    {showDiv1 ? (
      <div className="cards-section">
      <div className="card-container step3">

        <div className ="wastecard-1-labels">
            <div className="card-heading">How often would you like your waste collected? </div>
          
            <div className="waste-collection">
            <div className="choice-block"  onClick={your_waste_collection1}>
              <div className="choice-button-label">
                <div className="choice-button-text">Once a week</div>
              </div>
            </div>

              <div className="choice-block"  onClick={your_waste_collection2}>
              <div className="choice-button-label">
                <div className="choice-button-text">2 times a week</div>
              </div>
              </div>

              <div className="choice-block"  onClick={your_waste_collection3}>
              <div className="choice-button-label">
                <div className="choice-button-text">3 times a week</div>
              </div>
              </div>

              <div className="choice-block"  onClick={your_waste_collection4}>
              <div className="choice-button-label">
                <div className="choice-button-text">Other/Unsure</div>
              </div>
            </div>
            </div>

            <div className="timer-block">
                <Image src="/images/time_remaining_35.png" 
                width={40}
                height={40}
                loading="lazy" alt="time remaining 35 seconds" 
                className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
          </div>
          </div>
          </div>
          ) : (
            <div>
              <Poscode/>
            </div>
          )}
          </>
  )
}

export default Your_Waste_Collection
