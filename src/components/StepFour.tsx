// StepFour.tsx

import { ChangeEvent } from "react";

interface StepFourProps {
  formData: {
    bloodPressure: {
      systolic: number | undefined;
      diastolic: number | undefined;
    };
    cholesterolLevel: {
      total: number | undefined;
      hdl: number | undefined;
      ldl: number | undefined;
    };
    bloodSugarLevel: {
      fasting: number | undefined;
      postPrandial: number | undefined;
    };
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handlePrevious: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  formData,
  handleChange,
  handleSubmit,
  handlePrevious,
}) => {
  return (
    <div>
      <div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
        <h2 className="text-center text-[40px] font-extrabold">
          <span className="text-primary">Health</span> Metrics
        </h2>
        <div className="flex flex-col w-96 gap-5 text-center">
          <input
            type="number"
            name="bloodPressure.systolic"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            value={formData.bloodPressure.systolic}
            onChange={handleChange}
            placeholder="Systolic Blood Pressure"
          />
          <input
            type="number"
            name="bloodPressure.diastolic"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            value={formData.bloodPressure.diastolic}
            onChange={handleChange}
            placeholder="Diastolic Blood Pressure"
          />
          <input
            type="number"
            name="cholesterolLevel.total"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            value={formData.cholesterolLevel.total}
            onChange={handleChange}
            placeholder="Total Cholesterol Level"
          />
          <input
            type="number"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            name="cholesterolLevel.hdl"
            value={formData.cholesterolLevel.hdl}
            onChange={handleChange}
            placeholder="HDL Cholesterol Level"
          />
          <input
            type="number"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            name="cholesterolLevel.ldl"
            value={formData.cholesterolLevel.ldl}
            onChange={handleChange}
            placeholder="LDL Cholesterol Level"
          />
          <input
            type="number"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            name="bloodSugarLevel.fasting"
            value={formData.bloodSugarLevel.fasting}
            onChange={handleChange}
            placeholder="Fasting Blood Sugar Level"
          />
          <input
            type="number"
            className="px-3 py-2 rounded-lg border hover:border-smoke"
            name="bloodSugarLevel.postPrandial"
            value={formData.bloodSugarLevel.postPrandial}
            onChange={handleChange}
            placeholder="Post-Prandial Blood Sugar Level"
          />
        </div>
        <div className="flex gap-2 my-1">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>

        <div className="flex gap-2">
          {" "}
          <button
            className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
