import React, { useState } from 'react';
import WasteCollection from './WasteCollection';
import LookingOffOrOnGoingCollection from './LookingOffOrOnGoingCollection';
import WantWasteCollection from './WantWasteCollection';
import Business from './Business';
import Your_Waste_Collection from './Your_Waste_Collection';
import Ideal_Waste_Collector from './Ideal_Waste_Collector';
import Poscode from './Poscode';
import Contact_number from './Contact_number';

interface StepProps {
  isActive: boolean;
}

const Step1: React.FC<StepProps> = ({ isActive }) => {
  return isActive ? (
    <div>
       <WasteCollection/>
    </div>
  ) : null;
};

const Step2: React.FC<StepProps> = ({ isActive }) => {
  return isActive ? (
    <div>
      <LookingOffOrOnGoingCollection/>
    </div>
  ) : null;
};

const Step3: React.FC<StepProps> = ({ isActive }) => {
  return isActive ? (
    <div>
      <WantWasteCollection/>
    </div>
  ) : null;
};

const Step4: React.FC<StepProps> = ({ isActive }) => {
    return isActive ? (
      <div>
        <Business/>
      </div>
    ) : null;
  };

  const Step5: React.FC<StepProps> = ({ isActive }) => {
    return isActive ? (
      <div>
        <Your_Waste_Collection/>
      </div>
    ) : null;
  };

  const Step6: React.FC<StepProps> = ({ isActive }) => {
    return isActive ? (
      <div>
        <Ideal_Waste_Collector/>
      </div>
    ) : null;
  };

  const Step7: React.FC<StepProps> = ({ isActive }) => {
    return isActive ? (
      <div>
        <Poscode/>
      </div>
    ) : null;
  };

  const Step8: React.FC<StepProps> = ({ isActive }) => {
    return isActive ? (
      <div>
        <Contact_number/>
      </div>
    ) : null;
  };
 
const MultiStepForm: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
    setShowDiv(true);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Step1 isActive={step === 1} />
      <Step2 isActive={step === 2} />
      <Step3 isActive={step === 3} />
      <Step4 isActive={step === 4} />
      <Step5 isActive={step === 5} />
      <Step6 isActive={step === 6} />
      <Step7 isActive={step === 7} />
      <Step8 isActive={step === 8} />
      <div>
        {step > 1 && (
          <button className="prev_btn" onClick={handlePrev}>Previous</button>
        )}
        {step < 8 && (
          <button  className="btn btn--secondary next_btn" onClick={handleNext}>Next</button>
         
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
