"use client";
import React, { useState, useEffect } from "react";
import Axios from "@/utils/Axios";
import Patient from "./Patient";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("/profiles")
      .then((res) => {
        setPatients(res.data?.profiles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter((patient: any) => {
    const fullName = `${patient?.userId.firstName} ${patient.userId.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-blurblue flex flex-col justify-center items-center gap-4 h-screen bg-contain p-20">
      <h2 className="text-center text-[40px] font-extrabold">
        <span className="text-primary">Patients</span> Table
      </h2>
      <div className="flex flex-col w-96 gap-5 text-center">
      <input
        type="text"
        className="px-3 py-2 rounded-lg border hover:border-smoke"
        placeholder="Search Patients by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? <p>Loading...</p> : null}

      {filteredPatients.map((patient) => (
        <Patient patient={patient} />
      ))}
    </div>
    </div>
  );
};

export default Patients;
