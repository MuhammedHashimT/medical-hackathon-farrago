// StepOne.tsx

import { ChangeEvent } from 'react';

interface StepOneProps {
  formData: {
    address: string;
    email: string;
    phone: string;
    country: string;
    state: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ formData, handleChange, handleNext }) => {
  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
      <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
