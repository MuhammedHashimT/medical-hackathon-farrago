// MultiStepForm.tsx
"use client"
import { useState, ChangeEvent } from 'react';
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepThree';
import StepFour from '@/components/StepFour';

const Details: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    bloodGroup: '',
    height: '',
    weight: '',
    dob: '',
    gender: '',
    allergies: [],
    medications: [],
    surgeries: [],
    medicalHistory: '',
    bloodPressure: {
      systolic: undefined,
      diastolic:undefined
    },
    cholesterolLevel: {
      total:undefined,
      hdl:undefined,
      ldl:undefined
    },
    bloodSugarLevel : {
      fasting:undefined,
      postPrandial:undefined
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFourChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [parentKey, childKey] = name.split('.'); // Split the nested key
    
    setFormData(prevState => ({
      ...prevState,
      [parentKey]: {
        ...(prevState as any)[parentKey],
        [childKey]: parseInt(value) // Update the child key with the new value
      }
    }));
  };

  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div>
      {step === 1 && (
        <StepOne formData={formData} handleChange={handleChange} handleNext={handleNext} />
      )}
      {step === 2 && (
        <StepTwo formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />
      )}
      {step === 3 && (
        <StepThree formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />
      )}
      {step === 4 && (
        <StepFour formData={formData} handleChange={handleFourChange} handleSubmit={handleSubmit} handlePrevious={handlePrevious} />
      )}
    </div>
  );
};

export default Details;
