import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import LookingOffOrOnGoingCollection from './LookingOffOrOnGoingCollection';

const WasteCollection = () => {

  const [value1, setValue1] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('myKey1') || '';
    }
    return '';
  });



  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);
  const WasteType1 = () => {
    const newValue1 = "General";
    setValue1(newValue1);
    if (typeof window !== 'undefined') {
      localStorage.setItem('myKey1', newValue1);
    }

    setShowDiv(false);

    setShowDiv1(false);
  };
  
  const WasteType2 = () => {
    const newValue2 = "Recycling";
    setValue1(newValue2);
    if (typeof window !== 'undefined') {
      localStorage.setItem('myKey1', newValue2);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const WasteType3 = () => {
    const newValue3 = "Both";
    setValue1(newValue3);
    if (typeof window !== 'undefined') {
      localStorage.setItem('myKey1', newValue3);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  const WasteType4 = () => {
    const newValue4 = "Other/Unsure";
    setValue1(newValue4);
    if (typeof window !== 'undefined') {
      localStorage.setItem('myKey1', newValue4);
    }
    setShowDiv(false);
    setShowDiv1(false);
  };

  return (
    <> {showDiv && (
            <div className="progress-section-overriden">
           
    <div className="s_1">10%</div>

  </div>
 )}
      {showDiv1 ? (
        <div className="cards-section">
        <div className="card-container step3">
         <div className="card-icons">
         <div className="card-heading">What type of waste collection do you require?</div>
        <div className="waste-collection">
         <div className="choice-block" onClick={WasteType1}>
            <div  className="choice-block-link" >
                <Image
                  className='choice-image'
                    src="/general-small.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                  />
               <div className="choice-text">General</div>
            </div>
           </div>

           <div className="choice-block" onClick={WasteType2}>
              <div className="choice-block-link" >
                <Image
                  className='choice-image'
                  src="/images/recycling-small.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                 <div className="choice-text">Recycling</div>
              </div>
           </div>

           <div className="choice-block" onClick={WasteType3}>
              <div className="choice-block-link" >
                <Image
                  className='choice-image'
                  src="/images/both-small.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                 <div className="choice-text">Both</div>
              </div>
           </div>

           <div className="choice-block" onClick={WasteType4}>
              <div className="choice-block-link" >
                <Image
                  className='choice-image'
                  src="/images/unsure-small.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                 <div className="choice-text">Other/Unsure</div>
              </div>
           </div>
              </div>
              
            
              
         <div className="timer-block">
          <Image src="/images/time_remaining_55.png" 
                  width={40}
                  height={40}
                  alt="time remaining 55 seconds" 
                  className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
            </div>
            </div>
          </div>
           ) : (
            <div>
              <LookingOffOrOnGoingCollection/>
            </div>
        
          )}
         
   </>
  )
}

 export default WasteCollection;
