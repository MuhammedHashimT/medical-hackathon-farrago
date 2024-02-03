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
    <div className="flex min-h-screen bg-blurblue p-20 items-center justify-center bg-cover">
      <div
        className="bg-white flex flex-col h-fit w-[800px] p-10 rounded-xl gap-3 items-center"
      >
        <div className="w-16">
          <img
            className="object-contain cursor-pointer"
            src="/logo/logo-only.png"
            alt="Logo"
          />
        </div>
        <h1 className="text-center font-semibold text-2xl">
          Edit <span className="font-extrabold text-primary">Details</span>
        </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
        {Object.entries(formData).map(([key, value]) => 
        (
          <div key={key}>
            <label htmlFor={key} className=" text-gray-700 font-bold mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder={"Change "+ key.charAt(0).toUpperCase() + key.slice(1)}
              // value={`${value}`}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
        ))
          }</div>
        <button
          type="submit"
          className="hover:bg-light mt-4 w-full border-primary border rounded-lg text-white px-3 py-2 bg-primary"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
}

export default EditPage;