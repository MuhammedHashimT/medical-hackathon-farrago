"use client";
import Axios from "@/utils/Axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page({ params, searchParams }: any) {
  const [patientData, setPatientData] = useState<any>(null);

  const getMyData = async () => {
    try {
      let token = localStorage.getItem("token");
      let response = await Axios.post("/profiles/my-data", { token });
      setPatientData(response.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getMyData();
  }, []);

  if (!patientData) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-800">
            <span className="font-semibold">Email:</span> {patientData.email}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Phone Number:</span>{" "}
            {patientData.phoneNumber}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Address:</span>{" "}
            {patientData.address}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Country:</span>{" "}
            {patientData.country}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">State:</span> {patientData.state}
          </p>
        </div>
        <div>
          <p className="text-gray-800">
            <span className="font-semibold">Blood Group:</span>{" "}
            {patientData.bloodGroup}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Height:</span> {patientData.height}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Weight:</span> {patientData.weight}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Date of Birth:</span>{" "}
            {new Date(patientData.dob).toLocaleDateString()}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Gender:</span> {patientData.gender}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-semibold">Allergies:</span>{" "}
          {patientData.allergies.join(", ")}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Medications:</span>{" "}
          {patientData.medications.join(", ")}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Surgeries:</span>{" "}
          {patientData.surgeries.join(", ")}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Medical History:</span>{" "}
          {patientData.medicalHistory}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Emergency Contact Name:</span>{" "}
          {patientData.emergencyContact.name}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Emergency Contact Relationship:</span>{" "}
          {patientData.emergencyContact.relationship}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Emergency Contact Phone Number:</span>{" "}
          {patientData.emergencyContact.phoneNumber}
        </p>
      </div>
      <Link href={`/edit-profile/${patientData.userId._id}`} className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit
        </button>
      </Link>
    </div>
  );
}

export default Page;
