"use client";
import Axios from '@/utils/Axios';
import React from 'react'

const Patients = () => {

    const [patients, setPatients] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        Axios.get("/profiles")
        .then((res) => {
            setPatients(res.data?.profiles)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err.response);
            setLoading(false)
        })
    }, [])
  return (
    <div>
        <p>All Patients</p>

        {loading ? <p>Loading...</p> : null}

        {
            patients && patients?.map((patient: any) => {
                console.log(patient);
                
                return (
                    <div key={patient._id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="text-xl font-semibold">{`${patient.userId.firstName} ${patient.userId.lastName}`}</h2>
                        <p className="text-gray-600">{`Username: ${patient.userId.username}`}</p>
                        <p className="text-gray-600">{`Email: ${patient.email}`}</p>
                        <p className="text-gray-600">{`Blood Group: ${patient.bloodGroup}`}</p>
                        <p className="text-gray-600">{`Height: ${patient.height}`}</p>
                        <p className="text-gray-600">{`Weight: ${patient.weight}`}</p>
                        <p className="text-gray-600">{`Date of Birth: ${new Date(patient.dob).toLocaleDateString()}`}</p>
                        <p className="text-gray-600">{`Gender: ${patient.gender}`}</p>
                        <p className="text-gray-600">{`Allergies: ${patient.allergies.join(', ')}`}</p>
                        <p className="text-gray-600">{`Medications: ${patient.medications.join(', ')}`}</p>
                        <p className="text-gray-600">{`Surgeries: ${patient.surgeries.join(', ')}`}</p>
                        <p className="text-gray-600">{`Medical History: ${patient.medicalHistory}`}</p>
                        <p className="text-gray-600">{`Blood Pressure (Systolic): ${patient.bloodPressure?.systolic}`}</p>
                        <p className="text-gray-600">{`Blood Pressure (Diastolic): ${patient.bloodPressure?.diastolic}`}</p>
                        <p className="text-gray-600">{`Total Cholesterol Level: ${patient.cholesterolLevel?.total}`}</p>
                        <p className="text-gray-600">{`HDL Cholesterol Level: ${patient.cholesterolLevel?.hdl}`}</p>
                        <p className="text-gray-600">{`LDL Cholesterol Level: ${patient.cholesterolLevel?.ldl}`}</p>
                        <p className="text-gray-600">{`Fasting Blood Sugar Level: ${patient.bloodSugarLevel?.fasting}`}</p>
                        <p className="text-gray-600">{`Post-Prandial Blood Sugar Level: ${patient.bloodSugarLevel?.postPrandial}`}</p>
                    </div>
                );
                
                
            }
            )
        }

    </div>
  )
}

export default Patients