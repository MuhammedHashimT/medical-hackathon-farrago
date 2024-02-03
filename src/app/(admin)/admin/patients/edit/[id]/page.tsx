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
    {Object.entries(formData).map(([key, value]) => (
      <div key={key}>
        {/* Skip rendering properties of "userId" object */}
        {key !== "userId" && key !== "_id" && (
          <>
            <label htmlFor={key} className="text-gray-700 font-bold mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            {/* Check if the value is an object */}
            {typeof value === "object" ? (
              // If it's an object, map over its entries
              <div className="flex">
                
             { Object.entries(value as any).map(([k, v]) => (
                <div className="flex" key={k}>
                  <label htmlFor={k} className="text-gray-700 font-bold mb-2">
                    {k.charAt(0).toUpperCase() + k.slice(1)}:
                  </label>
                  {/* Convert the object value to a string */}
                  <input
                    type="text"
                    name={k}
                    value={String(v)} // Convert object value to string
                    onChange={handleChange}
                    className="px-3 py-2 border rounded-lg w-full"
                  />
                </div>
              ))
}
              </div>
            ) : (
              // If it's not an object, render a regular input
              <input
                type="text"
                name={key}
                value={String(value)} // Convert value to string
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg w-full"
              />
            )}
          </>
        )}
      </div>
    ))}
  </div>
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
