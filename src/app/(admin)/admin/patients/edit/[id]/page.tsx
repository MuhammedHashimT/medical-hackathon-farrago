"use client";
import Axios from "@/utils/Axios";
import React, { useEffect, useState } from "react";

function EditPage({ params, searchParams }: any) {
  const [patientData, setPatientData] = useState<any>(null);
  const [formData, setFormData] = useState(patientData);

  const getMyData = async () => {
    try {
      let token = localStorage.getItem("token");
      let response = await Axios.post("/profiles/my-data", { token });
      setPatientData(response.data);
      setFormData(response.data); // Set form data with initial patient data
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getMyData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Handle form submission and update patient data
      console.log(formData);
      // await Axios.post("/profiles/update", formData);
      // Show success message or redirect to another page
    } catch (error: any) {
      console.log(error.response.data);
      // Show error message
    }
  };

  if (!patientData) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Page</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="block text-gray-700 font-bold mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={`${value}`}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPage;
