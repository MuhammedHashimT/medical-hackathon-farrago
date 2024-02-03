"use client";
import Axios from "@/utils/Axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const getUserData = async () => {
    setLoading(true);
    try {
      let token = localStorage.getItem("token");
      let response = await Axios.post("/profiles/my-data", { token });
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <img className="w-64 h-16 object-contain" src="/logo/logo.png" />
        <h1 className="text-center font-bold text-4xl">Dashboard</h1>
        <button className="text-white max-h-8 px-2 py-1 bg-blue-700">
          Hello User
        </button>
      </div>

      {loading && <h1>Loading...</h1>}
      <h2 className="text-xl font-semibold mb-4">Health Information</h2>
      {data && (
        <div className="grid grid-cols-3 gap-y-5 mx-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p>
              Name: {data.userId.firstName} {data.userId.lastName}
            </p>
            <p>Username: {data.userId.username}</p>
            <p>Email: {data.email}</p>
            <p>Phone Number: {data.phoneNumber}</p>
            <p>
              Address: {data.address}, {data.state}, {data.country}
            </p>
            <p>Date of Birth: {new Date(data.dob).toLocaleDateString()}</p>
            <p>Gender: {data.gender}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Health Metrics</h3>
            <p>Blood Group: {data.bloodGroup}</p>
            <p>Height: {data.height} cm</p>
            <p>Weight: {data.weight} kg</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Health Conditions</h3>
            <p>Allergies: {data.allergies.join(", ")}</p>
            <p>Medications: {data.medications.join(", ")}</p>
            <p>Surgeries: {data.surgeries.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Health Metrics Details
            </h3>
            <p>
              Blood Pressure: {data.bloodPressure.systolic}/
              {data.bloodPressure.diastolic} mmHg
            </p>
            <p>
              Cholesterol Level: Total: {data.cholesterolLevel.total}, HDL:{" "}
              {data.cholesterolLevel.hdl}, LDL: {data.cholesterolLevel.ldl}
            </p>
            <p>
              Blood Sugar Level: Fasting: {data.bloodSugarLevel.fasting},
              Post-Prandial: {data.bloodSugarLevel.postPrandial}
            </p>
          </div>
          <Link
            href={"/chat-bot"}
            className="bg-blue-600 text-white flex-col items-center justify-center"
          >
            <h1 className="text-center m-auto">Interact with our assistant</h1>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
