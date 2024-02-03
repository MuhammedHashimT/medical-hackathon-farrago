// MultiStepForm.tsx
"use client"
import { useState, ChangeEvent } from 'react';
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepThree';
import StepFour from '@/components/StepFour';
import Axios from '@/utils/Axios';
import StepFive from './StepFive';

const Details: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    token: '',
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
    const token = localStorage.getItem('token')
    if (token) {
      formData.token = token;
    }
    Axios.post('/profiles', formData).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error.response);
    });
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
        <StepFour formData={formData} handleChange={handleChange} handleNext={handleNext}  handlePrevious={handlePrevious} />
      )}
      {step === 5 && (
        <StepFive formData={formData} handleChange={handleFourChange} handleSubmit={handleSubmit} handlePrevious={handlePrevious} />
      )}
    </div>
  );
};

export default Details;
