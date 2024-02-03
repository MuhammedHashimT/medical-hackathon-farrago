"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminDashboard = () => {
    const router = useRouter()
  return (
    <div>
        <h1>Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded-md">
                <h2>Patients</h2>
                <p>Manage Patients</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
                All Patients
            </div>
            <div onClick={
                () => {
                    router.push('/register')
                }
            
            } className="bg-gray-200 p-4 rounded-md cursor-pointer">
                create Patient
            </div>
            </div>
    </div>
  )
}

export default AdminDashboard