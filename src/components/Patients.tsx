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
    <div>
      <p>All Patients</p>
      <input
        type="text"
        placeholder="Search Patients by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? <p>Loading...</p> : null}

      {filteredPatients.map((patient) => (
        <Patient patient={patient} />
      ))}
    </div>
  );
};

export default Patients;
