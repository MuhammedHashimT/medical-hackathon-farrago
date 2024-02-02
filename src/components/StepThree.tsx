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
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      // Add the value to the array if checked
      handleChange({ target: { name, value: [...(formData as any)[name], value] } } as any);
    } else {
      // Remove the value from the array if unchecked
      handleChange({ target: { name, value: (formData as any)[name].filter((item : any) => item !== value) } } as ChangeEvent<HTMLSelectElement>);
    }
  };

  return (
    <div>
      <h2>Step 3: Medical Details</h2>
      <div>
        <h3>Allergies</h3>
        {['peanuts', 'penicillin', 'shellfish', 'latex', 'pollen', 'dust', 'pets', 'other'].map((allergy, index) => (
          <label key={index}>
            <input type="checkbox" name="allergies" value={allergy} checked={formData.allergies.includes(allergy)} onChange={handleCheckboxChange} />
            {allergy}
          </label>
        ))}
      </div>
      <div>
        <h3>Medications</h3>
        {['aspirin', 'ibuprofen', 'acetaminophen', 'antibiotics', 'antidepressants', 'insulin', 'other'].map((medication, index) => (
          <label key={index}>
            <input type="checkbox" name="medications" value={medication} checked={formData.medications.includes(medication)} onChange={handleCheckboxChange} />
            {medication}
          </label>
        ))}
      </div>
      <div>
        <h3>Surgeries</h3>
        {['appendectomy', 'tonsillectomy', 'hernia repair', 'knee replacement', 'hip replacement', 'lasik surgery', 'other'].map((surgery, index) => (
          <label key={index}>
            <input type="checkbox" name="surgeries" value={surgery} checked={formData.surgeries.includes(surgery)} onChange={handleCheckboxChange} />
            {surgery}
          </label>
        ))}
      </div>
      <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} placeholder="Medical History"></textarea>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepThree;
