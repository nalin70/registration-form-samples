import React, { useState } from 'react';
import App from './App';
import Schooling from './Schooling'
import Dac from './dac'

const Step1 = ({ onNext }) => (
  <div>
    <h2>Step 1: Personal Information</h2>
    {/* Add fields and inputs */ 
        <App/>
    }
    <button onClick={onNext}>Next</button>
  </div>
);

const Step2 = ({ onPrev, onNext }) => (
  <div>
    <h2>Step 2: Account Information</h2>
    {/* Add fields and inputs */
        <Schooling/>
    }
    <button onClick={onPrev}>Previous</button>
    <button onClick={onNext}>Next</button>
  </div>
);

const Step3 = ({ onPrev, onNext }) => (
    <div>
      <h2>Step 3: Account Information</h2>
      {/* Add fields and inputs */
          <Dac/>
      }
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );

// ... Create more step components for each step

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 3 && <Step3 onPrev={handlePrev} onNext={handleNext} />}
    </div>
  );
};

export default RegistrationForm;
