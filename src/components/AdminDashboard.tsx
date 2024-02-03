"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdminDashboard = () => {
  const router = useRouter();

  return (
    <div className="bg-blurblue flex flex-col justify-center items-center h-screen bg-contain p-20">
      <h2 className="text-center text-[40px] font-extrabold">
        <span className="text-primary">Admin</span> Dashboard
      </h2>
      <h2 className="text-xl font-semibold mb-4">Where Manage Patient Data </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Manage Patients Card */}
        <div className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400">
          <h2 className="text-lg text-white font-semibold mb-2">
            Manage Patients
          </h2>
          <p className="text-white">View and manage patient records</p>
        </div>

        {/* All Patients Card */}
        <div
          onClick={() => {
            router.push("/admin/patients");
          }}
          className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400"
        >
          <h2 className="text-lg text-white font-semibold mb-2">
            All Patients
          </h2>
          <p className="text-white">View all registered patients</p>
        </div>

        {/* Create Patient Card */}
        <div
          onClick={() => {
            router.push("/register");
          }}
          className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400"
        >
          <h2 className="text-lg text-white font-semibold mb-2">
            Create Patient
          </h2>
          <p className="text-white">Add a new patient record</p>
        </div>

        {/* Appointment Management Card */}
        <div className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400">
          <h2 className="text-lg text-white font-semibold mb-2">
            Appointment Management
          </h2>
          <p className="text-white">Schedule and manage appointments</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
