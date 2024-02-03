// StepOne.tsx

import { ChangeEvent } from "react";

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
  handleNumberChange : any
}

const StepOne: React.FC<StepOneProps> = ({
  formData,
  handleChange,
  handleNext,
  handleNumberChange
}) => {
  return (
    <div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
      <h2 className="text-center text-[40px] font-extrabold">
        <span className="text-primary">Personal</span> Details
      </h2>
      <div className="flex flex-col w-96 gap-5 text-center">
        <input
          className="px-3 py-2 rounded-lg border hover:border-smoke"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          className="px-3 py-2 rounded-lg border hover:border-smoke"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="px-3 py-2 rounded-lg border hover:border-smoke"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleNumberChange}
          placeholder="Phone"
        />
        <input
          className="px-3 py-2 rounded-lg border hover:border-smoke"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          className="px-3 py-2 rounded-lg border hover:border-smoke"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
        />
      </div>
      <div className="flex gap-2 my-1">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>
      <button
        className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
