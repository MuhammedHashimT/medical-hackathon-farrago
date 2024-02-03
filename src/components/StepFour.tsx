// StepFour.tsx

import { ChangeEvent } from "react";

interface StepFourProps {
  formData: {
    surgeries: string[];
    medicalHistory: string;
  };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
      <h2 className="text-center text-[40px] font-extrabold">
        <span className="text-primary">Medical</span> Details
      </h2>
      <div className="flex flex-col w-96 gap-5 text-center">
        <div>
          <h3 className="font-semibold text-lg mb-2">Surgeries</h3>
          {/* {['appendectomy', 'tonsillectomy', 'hernia repair', 'knee replacement', 'hip replacement', 'lasik surgery', 'other'].map((surgery, index) => (
          <label key={index}>
            <input type="checkbox" name="surgeries" value={surgery} checked={formData.surgeries.includes(surgery)} onChange={handleCheckboxChange} />
            {surgery}
          </label>
        ))} */}

          <div className="flex flex-col gap-2">
            {[
              "appendectomy",
              "tonsillectomy",
              "hernia repair",
              "knee replacement",
              "hip replacement",
              "lasik surgery",
              "other",
            ].map((surgery, index) => (
              <div
                key={index}
                className={` ${
                  formData.surgeries.includes(surgery)
                    ? "bg-smoke border-smoke hover:border-light"
                    : "bg-white hover:border-smoke border-gray-100"
                } border-2  px-3 py-2 cursor-pointer hover:bg-smoke  rounded-xl transition-colors duration-100`}
                onClick={(e) => {
                  if (formData.surgeries.includes(surgery)) {
                    // Remove from formData
                    const newSurgeries = formData.surgeries.filter(
                      (a) => a !== surgery
                    );
                    handleChange({
                      target: { name: "surgeries", value: newSurgeries },
                    } as any);
                  } else {
                    // Add to formData
                    handleChange({
                      target: {
                        name: "surgeries",
                        value: [...formData.surgeries, surgery],
                      },
                    } as any);
                  }
                }}
              >
                {surgery}
              </div>
            ))}
          </div>
        </div>
        <textarea
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          className="p-2 border-gray-100 hover:border-smoke border rounded-xl"
          placeholder="Other Details"
        ></textarea>
      </div>
      <div className="flex gap-2 my-1">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>

      <div className="flex gap-2">
        <button
          className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepFour;
