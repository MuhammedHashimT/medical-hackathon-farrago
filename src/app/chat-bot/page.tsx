"use client";
import React, { useState } from "react";

// Define predefined medical questions and answers
const medicalQuestionsAndAnswers: { [key: string]: string[] } = {
  "Do you have any allergies?": ["Peanuts", "Shellfish", "None"],
  "Are you currently taking any medications?": [
    "Aspirin",
    "Antibiotics",
    "None",
  ],
  "Have you undergone any surgeries in the past?": [
    "Appendectomy",
    "Knee Replacement",
    "None",
  ],
  "Do you have any existing medical conditions?": [
    "Hypertension",
    "Diabetes",
    "None",
  ],
  // Add more questions as needed
};

const ChatBot: React.FC = () => {
  const [userResponses, setUserResponses] = useState<{ [key: string]: string }>(
    {}
  );
  const [finalSolution, setFinalSolution] = useState<{
    [key: string]: any;
  } | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    Object.keys(medicalQuestionsAndAnswers)[0]
  );

  // Function to handle user response selection
  const handleAnswerSelection = (answer: string) => {
    setUserResponses({ ...userResponses, [currentQuestion]: answer });

    const nextQuestionIndex =
      Object.keys(medicalQuestionsAndAnswers).indexOf(currentQuestion) + 1;
    const nextQuestion = Object.keys(medicalQuestionsAndAnswers)[
      nextQuestionIndex
    ];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      generateFinalSolution();
    }
  };

  const generateFinalSolution = () => {
    // Initialize health condition, required medications, and solution
    let healthCondition = "Healthy";
    let requiredMedications: string[] = [];
    let solution = "Follow a balanced diet and exercise regularly.";

    // Check each user response and update solution and health condition accordingly
    Object.keys(userResponses).forEach((question) => {
      const response = userResponses[question];

      // Update solution based on user responses
      switch (question) {
        case "Do you have any allergies?":
          if (response !== "None") {
            requiredMedications.push("Antihistamines");
          }
          break;

        case "Are you currently taking any medications?":
          if (response !== "None") {
            requiredMedications.push("Medication A");
          }
          break;

        case "Have you undergone any surgeries in the past?":
          if (response !== "None") {
            solution += " Attend follow-up appointments for post-surgery care.";
          }
          break;

        case "Do you have any existing medical conditions?":
          if (response !== "None") {
            solution += " Consult your healthcare provider regularly.";
          }
          break;

        // Add more cases for additional questions as needed
        default:
          break;
      }
    });

    // Check if there are required medications or additional medical advice
    if (
      requiredMedications.length > 0 ||
      solution.includes("Consult your healthcare provider")
    ) {
      healthCondition = "Requires Attention";
    }

    // Set the final solution object
    setFinalSolution({
      "Health Condition": healthCondition,
      "Required Medications": requiredMedications,
      Solution: solution,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blurblue">
      <div className="bg-white flex flex-col h-fit w-[400px] p-10 rounded-xl gap-3 items-center">
        {finalSolution ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Final Solution</h2>
            <div>
              <p>Health Condition: {finalSolution["Health Condition"]}</p>
              <p>
                Required Medications:{" "}
                {finalSolution["Required Medications"].join(", ")}
              </p>
              <p>Solution: {finalSolution["Solution"]}</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 ">{currentQuestion}</h2>
            <ul className="list-none p-0">
              {medicalQuestionsAndAnswers[currentQuestion].map(
                (answer, index) => (
                  <li key={index} className="mb-2 ">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                      onClick={() => handleAnswerSelection(answer)}
                    >
                      {answer}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
