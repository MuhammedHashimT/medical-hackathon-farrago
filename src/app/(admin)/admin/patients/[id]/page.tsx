"use client";
import Axios from "@/utils/Axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page({ params, searchParams }: any) {
  const [patientData, setPatientData] = useState<any>(null);
  console.log(patientData);
  

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
    <div className="flex w-screen h-screen bg-blurblue items-center justify-center bg">
      <div
        className="bg-white flex flex-col h-fit w-96 p-10 rounded-xl gap-3 items-center"
      >
        <div className="w-16">
          <img
            className="object-contain cursor-pointer"
            src="/logo/logo-only.png"
            alt="Logo"
          />
        </div>
        <h1 className="text-center font-semibold text-2xl">
          Patient <span className="font-extrabold text-primary">Details</span>
        </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-800 break-words">
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
          {patientData.emergencyContact?.name}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Emergency Contact Relationship:</span>{" "}
          {patientData.emergencyContact?.relationship}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Emergency Contact Phone Number:</span>{" "}
          {patientData.emergencyContact?.phoneNumber}
        </p>
      </div>
      <div className="flex gap-4 print:hidden">
      <Link href={`/admin/patients/edit/${patientData.userId._id}`} className="mt-2">
        <button className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary">
          Edit
        </button>
      </Link>

        <button onClick={()=>{
          window.print();
        }} className="hover:bg-light mt-2 border-primary border rounded-lg text-white px-3 py-1 bg-primary">
          Print
        </button>
      </div>
    </div>
    </div>
  );
}

export default Page;
