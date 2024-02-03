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
    if (formData.allergies.includes(value)) {
      // Add the value to the array if checked
      handleChange({ target: { name, value: [...(formData as any)[name], value] } } as any);
    } else {
      // Remove the value from the array if unchecked
      handleChange({ target: { name, value: (formData as any)[name].filter((item : any) => item !== value) } } as ChangeEvent<HTMLSelectElement>);
    }
  };

  return (
<div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
      <h2 className="text-center text-[40px] font-extrabold">
        <span className="text-primary">Medical</span> Details
      </h2>
      <div className="flex flex-col w-96 gap-5 text-center">
        <div>
        <h3 className='font-semibold text-lg mb-2'>Allergies</h3>
        {/* {['peanuts', 'penicillin', 'shellfish', 'latex', 'pollen', 'dust', 'pets', 'other'].map((allergy, index) => (
          <label key={index}>
            <input type="checkbox" name="allergies" value={allergy} checked={formData.allergies.includes(allergy)} onChange={handleCheckboxChange} />
            {allergy}
          </label>
        ))} */}

<div className='flex flex-wrap justify-center gap-1'>
{
          ['peanuts', 'penicillin', 'shellfish', 'latex', 'pollen', 'dust', 'pets', 'other'].map((allergy, index) => (
            <div
              key={index}
              className= {` ${
                formData.allergies.includes(allergy) ? 'bg-smoke border-smoke hover:border-light' : 'bg-white hover:border-smoke border-gray-100'
              } border-2 inline  px-3 py-1 cursor-pointer hover:bg-smoke  rounded-full transition-colors duration-100` }
              onClick={(e)=> {
                if(formData.allergies.includes(allergy)) {
                    // Remove from formData
                    const newAllergies = formData.allergies.filter((a) => a !== allergy);
                    handleChange({ target: { name: 'allergies', value: newAllergies } } as any);
                } else {
                    // Add to formData
                    handleChange({ target: { name: 'allergies', value: [...formData.allergies, allergy] } } as any);
                }
              }
              }
            >
              {
                allergy
              }
            </div>
          ))
        }
</div>
      </div>
      <div>
        <h3>Medications</h3>
        {/* {['aspirin', 'ibuprofen', 'acetaminophen', 'antibiotics', 'antidepressants', 'insulin', 'other'].map((medication, index) => (
          <label key={index}>
            <input  type="checkbox" name="medications" value={medication} checked={formData.medications.includes(medication)} onChange={handleCheckboxChange} />
            {medication}
          </label>
        ))} */}

        {
          ['aspirin', 'ibuprofen', 'acetaminophen', 'antibiotics', 'antidepressants', 'insulin', 'other'].map((medication, index) => (
            <div
              key={index}
              className= {` ${
                formData.medications.includes(medication) ? 'bg-gray-200' : 'bg-white'
              } border-2 border-gray-300 p-2 m-2 cursor-pointer hover:bg-gray-200 rounded-md` }
              onClick={(e)=> {
                if(formData.medications.includes(medication)) {
                    // Remove from formData
                    const newMedications = formData.medications.filter((a) => a !== medication);
                    handleChange({ target: { name: 'medications', value: newMedications } } as any);
                } else {
                    // Add to formData
                    handleChange({ target: { name: 'medications', value: [...formData.medications, medication] } } as any);
                }
              }
              }
            >
              {
                medication
              }
            </div>
          ))
        }
      </div>
      <div>
      <h3 className='font-semibold text-lg mb-2'>Surgeries</h3>
        {/* {['appendectomy', 'tonsillectomy', 'hernia repair', 'knee replacement', 'hip replacement', 'lasik surgery', 'other'].map((surgery, index) => (
          <label key={index}>
            <input type="checkbox" name="surgeries" value={surgery} checked={formData.surgeries.includes(surgery)} onChange={handleCheckboxChange} />
            {surgery}
          </label>
        ))} */}

       <div className=''>{
          ['appendectomy', 'tonsillectomy', 'hernia repair', 'knee replacement', 'hip replacement', 'lasik surgery', 'other'].map((surgery, index) => (
            <div
              key={index}
              className= {` ${
                formData.surgeries.includes(surgery) ?'bg-smoke border-smoke hover:border-light' : 'bg-white hover:border-smoke border-gray-100'
              } border-2  px-3 py-1 cursor-pointer hover:bg-smoke  rounded-full transition-colors duration-100` }
              onClick={(e)=> {
                if(formData.surgeries.includes(surgery)) {
                    // Remove from formData
                    const newSurgeries = formData.surgeries.filter((a) => a !== surgery);
                    handleChange({ target: { name: 'surgeries', value: newSurgeries } } as any);
                } else {
                    // Add to formData
                    handleChange({ target: { name: 'surgeries', value: [...formData.surgeries, surgery] } } as any);
                }
              }
              }
            >
              {
                surgery
              }
            </div>
          ))
        }</div>
      </div>
      <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} placeholder="Medical History"></textarea>
      </div><div className="flex gap-2 my-1">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>
      
      <div className='flex gap-2' >   <button className='hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary' onClick={handlePrevious}>Previous</button>
      <button className='hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary' onClick={handleNext}>Next</button></div>
      </div>
  );
};

export default StepThree;
