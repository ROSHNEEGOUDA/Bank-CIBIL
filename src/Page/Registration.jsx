import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/citi-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const VolunteerRegistration = () => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPhoto(URL.createObjectURL(event.target.files[0]));
        }
    };

    const triggerFileInput = () => {
        document.getElementById('photoInput').click();
    };

    const countryCodes = [
        { code: '+1', country: 'USA' },
        { code: '+44', country: 'UK' },
        { code: '+91', country: 'India' },
        { code: '+880', country: 'Bangladesh' },
        // Add more country codes as needed
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">  
            <div className="flex flex-col items-center mb-8">
                {/* <img src={logo} alt="CyberPeace Corps" className="h-16 w-auto sm:h-20" /> */}
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 w-full sm:w-3/4 lg:w-1/2 mb-16">
                <h2 className="font-bold mb-6 text-center text-gray-800 text-2xl sm:text-3xl">Registration</h2>
                <div className="flex flex-col items-center mb-8">
                    <div
                        className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 cursor-pointer relative"
                        onClick={triggerFileInput}
                    >
                        {photo ?
                            <img src={photo} alt="Profile" className="h-full w-full rounded-full object-cover" /> :
                            <div className="flex flex-col items-center">
                                <span>Add Photo</span>
                                <FontAwesomeIcon icon={faUpload} className="absolute bottom-2" />
                            </div>
                        }
                    </div>
                    <input
                        type="file"
                        id="photoInput"
                        className="hidden"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>
                <form>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role<span className='text-red-700'>*</span></label>
                        <select id="role" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500">
                            <option value="">Select Role</option>
                            <option value="user">Bank</option>
                            <option value="admin">Manager</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name <span className='text-red-700'>*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 flex flex-col sm:flex-row">
                        <div className="sm:mr-4 w-full sm:w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                                Date of Birth <span className='text-red-700'>*</span>
                            </label>
                            <input
                                type="text"
                                id="dob"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                placeholder="DOB"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                Gender <span className='text-red-700'>*</span>
                            </label>
                            <select
                                id="gender"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                placeholder="Gender"
                            >
                                <option value="">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email <span className='text-red-700'>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-5 flex flex-col sm:flex-row">
                        <div className="sm:mr-4 w-full sm:w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                Password <span className='text-red-700'>*</span>
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                Confirm Password <span className='text-red-700'>*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-5 flex flex-col sm:flex-row">
                        <div className="sm:mr-4 w-full sm:w-1/3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countryCode">
                                Country Code
                            </label>
                            <select
                                id="countryCode"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            >
                                {countryCodes.map((country, index) => (
                                    <option key={index} value={country.code}>
                                        {country.code} ({country.country})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full sm:w-2/3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone no.
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <button
                                type="button"
                                className="bg-gray-600 hover:bg-blue-700 active:bg-blue-800 focus:ring focus:ring-blue-500 hover:shadow-lg text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                            >
                                Back
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                type="submit"
                                className="bg-gray-600 hover:bg-blue-400 active:bg-blue-800 focus:ring focus:ring-blue-500 hover:shadow-lg text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline hover:translate-x-1 hover:-translate-y-1 "
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VolunteerRegistration;
