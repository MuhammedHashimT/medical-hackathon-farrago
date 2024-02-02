// StepTwo.tsx

import { ChangeEvent } from 'react';

interface StepTwoProps {
  formData: {
    bloodGroup: string;
    height: string;
    weight: string;
    dob: string;
    gender: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, handleChange, handleNext, handlePrevious }) => {
  return (
    <div>
      <h2>Step 2: Health Details</h2>
      <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
      <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height" />
      <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepTwo;
