"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminDashboard = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Manage Patients Card */}
                <div className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400">
                    <h2 className="text-lg text-white font-semibold mb-2">Manage Patients</h2>
                    <p className='text-white'>View and manage patient records</p>
                </div>

                {/* All Patients Card */}
                <div
                    onClick={() => {
                        router.push('/admin/patients');
                    }}
                    className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400"
                >
                    <h2 className="text-lg text-white font-semibold mb-2">All Patients</h2>
                    <p className='text-white'>View all registered patients</p>
                </div>

                {/* Create Patient Card */}
                <div
                    onClick={() => {
                        router.push('/register');
                    }}
                    className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400"
                >
                    <h2 className="text-lg text-white font-semibold mb-2">Create Patient</h2>
                    <p className='text-white'>Add a new patient record</p>
                </div>

                {/* Appointment Management Card */}
                <div className="bg-blue-500 p-6 rounded-md cursor-pointer hover:bg-blue-400">
                    <h2 className="text-lg text-white font-semibold mb-2">Appointment Management</h2>
                    <p className='text-white'>Schedule and manage appointments</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
