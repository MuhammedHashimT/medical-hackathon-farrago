// StepThree.tsx

import { ChangeEvent } from 'react';

interface StepThreeProps {
  formData: {
    allergies: string[];
    medications: string[];
    surgeries: string[];
    medicalHistory: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ formData, handleChange, handleNext, handlePrevious }) => {
  return (
    <div>
      <h2>Step 3: Medical Details</h2>
      <select multiple name="allergies" value={formData.allergies} onChange={handleChange}>
        <option value="">Select Allergies</option>
        <option value="peanuts">Peanuts</option>
        <option value="penicillin">Penicillin</option>
        <option value="shellfish">Shellfish</option>
        <option value="latex">Latex</option>
        <option value="pollen">Pollen</option>
        <option value="dust">Dust</option>
        <option value="pets">Pets</option>
        <option value="other">Other</option>
      </select>
      <select multiple name="medications" value={formData.medications} onChange={handleChange}>
        <option value="">Select Medications</option>
        <option value="aspirin">Aspirin</option>
        <option value="ibuprofen">Ibuprofen</option>
        <option value="acetaminophen">Acetaminophen</option>
        <option value="antibiotics">Antibiotics</option>
        <option value="antidepressants">Antidepressants</option>
        <option value="insulin">Insulin</option>
        <option value="other">Other</option>
      </select>
      <select multiple name="surgeries" value={formData.surgeries} onChange={handleChange}>
        <option value="">Select Surgeries</option>
        <option value="appendectomy">Appendectomy</option>
        <option value="tonsillectomy">Tonsillectomy</option>
        <option value="hernia repair">Hernia Repair</option>
        <option value="knee replacement">Knee Replacement</option>
        <option value="hip replacement">Hip Replacement</option>
        <option value="lasik surgery">Lasik Surgery</option>
        <option value="other">Other</option>
      </select>
      <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} placeholder="Medical History"></textarea>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepThree;
