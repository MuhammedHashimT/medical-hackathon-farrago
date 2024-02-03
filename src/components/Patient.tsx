import Link from "next/link";
import React, { useState } from "react";

const PatientCard = ({ patient }: any) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Link
      href={`/admin/patients/${patient.userId._id}`}
      className="bg-white border border-gray-200 p-4 rounded-xl hover:border-smoke cursor-pointer"
      onClick={toggleModal}
    >
      <h2 className="text-xl font-bold py-1 text-primary rounded-xl">{`${patient.userId.firstName} ${patient.userId.lastName}`}</h2>
      <p className="text-gray-600 text-sm">{`Username: ${patient.userId.username}`}</p>
      <p className="text-gray-600 text-sm">{`Email: ${patient.email}`}</p>
      {/* {showModal && (
        <>
          {" "}
          <p className="text-gray-600 text-sm">{`Blood Group: ${patient.bloodGroup}`}</p>
          <p className="text-gray-600 text-sm">{`Height: ${patient.height}`}</p>
          <p className="text-gray-600 text-sm">{`Weight: ${patient.weight}`}</p>
          <p className="text-gray-600 text-sm">{`Date of Birth: ${new Date(
            patient.dob
          ).toLocaleDateString()}`}</p>
          <p className="text-gray-600 text-sm">{`Gender: ${patient.gender}`}</p>
          <p className="text-gray-600 text-sm">{`Allergies: ${patient.allergies.join(
            ", "
          )}`}</p>
          <p className="text-gray-600 text-sm">{`Medications: ${patient.medications.join(
            ", "
          )}`}</p>
          <p className="text-gray-600 text-sm">{`Surgeries: ${patient.surgeries.join(
            ", "
          )}`}</p>
          <p className="text-gray-600 text-sm">{`Medical History: ${patient.medicalHistory}`}</p>
          <p className="text-gray-600 text-sm">{`Blood Pressure (Systolic): ${patient.bloodPressure?.systolic}`}</p>
          <p className="text-gray-600 text-sm">{`Blood Pressure (Diastolic): ${patient.bloodPressure?.diastolic}`}</p>
          <p className="text-gray-600 text-sm">{`Total Cholesterol Level: ${patient.cholesterolLevel?.total}`}</p>
          <p className="text-gray-600 text-sm">{`HDL Cholesterol Level: ${patient.cholesterolLevel?.hdl}`}</p>
          <p className="text-gray-600 text-sm">{`LDL Cholesterol Level: ${patient.cholesterolLevel?.ldl}`}</p>
          <p className="text-gray-600 text-sm">{`Fasting Blood Sugar Level: ${patient.bloodSugarLevel?.fasting}`}</p>
          <p className="text-gray-600 text-sm">{`Post-Prandial Blood Sugar Level: ${patient.bloodSugarLevel?.postPrandial}`}</p>
        </>
      )} */}
    </Link>
  );
};

export default PatientCard;
