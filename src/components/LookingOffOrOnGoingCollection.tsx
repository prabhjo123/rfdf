import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import WantWasteCollection from './WantWasteCollection';



const LookingOffOrOnGoingCollection = () => {

  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ongoing') || '';
    }
    return '';
  });

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv, setShowDiv] = useState(true);
  
  const ongoing = () => {
    const newValue = "Ongoing";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ongoing', newValue);
    }

    setShowDiv(false);


    setShowDiv1(false);
  };

  const one_off = () => {
    const newValue = "One Off";
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ongoing', newValue);
    }
    setShowDiv(false);

    setShowDiv1(false);
  };
  
  return (
<>
{showDiv && (
<div className="progress-section-overriden">
    
    <div className="s_2">20%</div>

  </div>
 )}

{showDiv1 ? (
<div className="cards-section">
<div className="card-container">
  
    <div className="card-icons">
            <div className="card-heading">Are you looking for a one-off or ongoing collections?</div>
            <div className="waste-collection">
            <div className="choice-block" onClick={ongoing}>
              <div  className="choice-block-link" >
                <Image src="/images/ongoing-small.png"
                 loading="lazy" 
                 alt="Ongoing icon" 
                 width={300}
                 height={300}
                className="choice-image"/>
                <div className="choice-text">Ongoing</div>
              </div>
            </div>

            <div className="choice-block" onClick={one_off}>
              <div className="choice-block-link" >
                <Image
                  className='choice-image'
                  src="/images/one-off-small.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
                 <div className="choice-text">One off</div>
              </div>
           </div>
           </div>
            
            <div className="timer-block">
              <Image src="/images/time_remaining_45.png" 
              loading="lazy"
              width={40}
               height={40}
               alt="time remaining 45 seconds"
               className="timer-image"/>
              <h2 className="timer-text">seconds left...</h2>
            </div>
    </div>
    </div>
    </div>
     ) : (
      <div>
        <WantWasteCollection/>
      </div>
    )}
    </>
  )
}

export default LookingOffOrOnGoingCollection
