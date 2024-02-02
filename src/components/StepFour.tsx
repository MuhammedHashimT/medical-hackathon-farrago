// StepFour.tsx

import { ChangeEvent } from 'react';

interface StepFourProps {
  formData: {
    bloodPressure: {
      systolic: number;
      diastolic: number;
    };
    cholesterolLevel: {
      total: number;
      hdl: number;
      ldl: number;
    };
    bloodSugarLevel: {
      fasting: number;
      postPrandial: number;
    };
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handlePrevious: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ formData, handleChange, handleSubmit, handlePrevious }) => {
  return (
    <div>
      <h2>Step 4: Health Metrics</h2>
      <input type="number" name="bloodPressure.systolic" value={formData.bloodPressure.systolic} onChange={handleChange} placeholder="Systolic Blood Pressure" />
      <input type="number" name="bloodPressure.diastolic" value={formData.bloodPressure.diastolic} onChange={handleChange} placeholder="Diastolic Blood Pressure" />
      <input type="number" name="cholesterolLevel.total" value={formData.cholesterolLevel.total} onChange={handleChange} placeholder="Total Cholesterol Level" />
      <input type="number" name="cholesterolLevel.hdl" value={formData.cholesterolLevel.hdl} onChange={handleChange} placeholder="HDL Cholesterol Level" />
      <input type="number" name="cholesterolLevel.ldl" value={formData.cholesterolLevel.ldl} onChange={handleChange} placeholder="LDL Cholesterol Level" />
      <input type="number" name="bloodSugarLevel.fasting" value={formData.bloodSugarLevel.fasting} onChange={handleChange} placeholder="Fasting Blood Sugar Level" />
      <input type="number" name="bloodSugarLevel.postPrandial" value={formData.bloodSugarLevel.postPrandial} onChange={handleChange} placeholder="Post-Prandial Blood Sugar Level" />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepFour;
