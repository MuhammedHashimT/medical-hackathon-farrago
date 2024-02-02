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
    <div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
    <h2 className="text-center text-[40px] font-extrabold">
      <span className="text-primary">Health</span> Details
    </h2>
    <div className="flex flex-col w-96 gap-5 text-center">

      <input type="number" className='px-3 py-2 rounded-lg border hover:border-smoke' name="height" value={formData.height} onChange={handleChange} placeholder="Height" />
      <input className='px-3 py-2 rounded-lg border hover:border-smoke' type="number"  name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" />
      
      <input className='px-3 py-2 rounded-lg border hover:border-smoke' type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
      <select className='px-3 py-2 rounded-lg border hover:border-smoke' name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><select name="bloodGroup" className='px-3 py-2 rounded-lg border hover:border-smoke' value={formData.bloodGroup} onChange={handleChange}>
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

export default StepTwo;
