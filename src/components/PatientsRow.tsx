"use client";

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import 'ag-grid-enterprise';
import React, { StrictMode, useCallback, useEffect, useMemo } from 'react';

import  "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from 'react';
import Axios from '@/utils/Axios';

const PatientsRow = () => {

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    // { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  useEffect(() => {
    Axios.get("/profiles")
      .then((res) => {
        console.log(res.data?.profiles);
        setRowData(res.data?.profiles);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  , []);
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { headerName: "First Name", field: "userId.firstName" },
  { headerName: "Last Name", field: "userId.lastName" },
  { headerName: "Username", field: "userId.username" },
  { headerName: "Address", field: "address" },
  { headerName: "Email", field: "email" },
  { headerName: "User ID", field: "userId._id" },
    { headerName: "Blood Pressure - Systolic", field: "bloodPressure.systolic" },
  { headerName: "Blood Pressure - Diastolic", field: "bloodPressure.diastolic" },
  { headerName: "Cholesterol Level - Total", field: "cholesterolLevel.total" },
  { headerName: "Cholesterol Level - HDL", field: "cholesterolLevel.hdl" },
  { headerName: "Cholesterol Level - LDL", field: "cholesterolLevel.ldl" },
  { headerName: "Blood Sugar Level - Fasting", field: "bloodSugarLevel.fasting" },
  { headerName: "Blood Sugar Level - Post Prandial", field: "bloodSugarLevel.postPrandial" },

  
  { headerName: "Phone Number", field: "phoneNumber" },
  { headerName: "Country", field: "country" },
  { headerName: "State", field: "state" },
  { headerName: "Blood Group", field: "bloodGroup" },
  { headerName: "Height", field: "height" },
  { headerName: "Weight", field: "weight" },
  { headerName: "Date of Birth", field: "dob" },
  { headerName: "Gender", field: "gender" },
  { headerName: "Allergies", field: "allergies" },
  { headerName: "Medications", field: "medications" },
  { headerName: "Surgeries", field: "surgeries" },
  { headerName: "Medical History", field: "medicalHistory" },
  { headerName: "Phone", field: "phone" }
  ]);

  return (<div>
    <div className="ag-theme-quartz" style={{ height: 500 }}>
  {/* The AG Grid component */}
    <p>
      Patients Table
    </p>
  <AgGridReact rowData={rowData} columnDefs={colDefs as unknown as any} />
</div>


  </div>);
}

export default PatientsRow
