import React, { useState } from "react";

const PatientCard = ({ patient }: any) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md m-2" onClick={toggleModal}>
      <h2 className="text-xl font-semibold">{`${patient.userId.firstName} ${patient.userId.lastName}`}</h2>
      <p className="text-gray-600">{`Username: ${patient.userId.username}`}</p>
      <p className="text-gray-600">{`Email: ${patient.email}`}</p>
      {showModal && (
        <>
          {" "}
          <p className="text-gray-600">{`Blood Group: ${patient.bloodGroup}`}</p>
          <p className="text-gray-600">{`Height: ${patient.height}`}</p>
          <p className="text-gray-600">{`Weight: ${patient.weight}`}</p>
          <p className="text-gray-600">{`Date of Birth: ${new Date(
            patient.dob
          ).toLocaleDateString()}`}</p>
          <p className="text-gray-600">{`Gender: ${patient.gender}`}</p>
          <p className="text-gray-600">{`Allergies: ${patient.allergies.join(
            ", "
          )}`}</p>
          <p className="text-gray-600">{`Medications: ${patient.medications.join(
            ", "
          )}`}</p>
          <p className="text-gray-600">{`Surgeries: ${patient.surgeries.join(
            ", "
          )}`}</p>
          <p className="text-gray-600">{`Medical History: ${patient.medicalHistory}`}</p>
          <p className="text-gray-600">{`Blood Pressure (Systolic): ${patient.bloodPressure?.systolic}`}</p>
          <p className="text-gray-600">{`Blood Pressure (Diastolic): ${patient.bloodPressure?.diastolic}`}</p>
          <p className="text-gray-600">{`Total Cholesterol Level: ${patient.cholesterolLevel?.total}`}</p>
          <p className="text-gray-600">{`HDL Cholesterol Level: ${patient.cholesterolLevel?.hdl}`}</p>
          <p className="text-gray-600">{`LDL Cholesterol Level: ${patient.cholesterolLevel?.ldl}`}</p>
          <p className="text-gray-600">{`Fasting Blood Sugar Level: ${patient.bloodSugarLevel?.fasting}`}</p>
          <p className="text-gray-600">{`Post-Prandial Blood Sugar Level: ${patient.bloodSugarLevel?.postPrandial}`}</p>
        </>
      )}
    </div>
  );
};

export default PatientCard;
