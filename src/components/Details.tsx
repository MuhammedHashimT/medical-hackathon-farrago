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
      systolic: 0,
      diastolic:0
    },
    cholesterolLevel: {
      total:0,
      hdl:0,
      ldl:0
    },
    bloodSugarLevel : {
      fasting:0,
      postPrandial:0
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
        <StepFour formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handlePrevious={handlePrevious} />
      )}
    </div>
  );
};

export default Details;
