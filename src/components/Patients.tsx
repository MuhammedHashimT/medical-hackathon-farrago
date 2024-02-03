"use client";
import React, { useState, useEffect } from "react";
import Axios from "@/utils/Axios";
import Patient from "./Patient";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <p>All Patients</p>
      {loading ? <p>Loading...</p> : null}

      {patients.map((patient: any) => (
        <Patient key={patient._id} patient={patient} />
      ))}
    </div>
  );
};

export default Patients;
