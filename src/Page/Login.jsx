import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/citi-removebg-preview.png';
import MoneyLoader from '../Loader/Loading'; // Import money loading animation
import Background from '../Background/Background';

const Login = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('user');

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true); // Show animation
        setTimeout(() => {
            navigate('/homepage'); // Navigate after 2 sec
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
            <Background />
            {loading ? (
                <MoneyLoader /> // Show animation while loading
            ) : (
                <>
                    <div className='z-10'>
                        <div className="flex flex-col items-center mb-8">
                            {/* <img src={logo} alt="CyberPeace Corps" className="h-20 w-auto" /> */}
                        </div>
                        <div className={`bg-[#57aaf3c2] rounded-lg shadow-xl ${isMobile ? "p-5 w-5/6 mb-16" : "p-10 w-96 mb-16"}`}>
                            <h2 className={`font-bold mb-6 text-center text-gray-800 ${isMobile ? "text-xl" : "text-3xl"}`}>Welcome Back!</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email ID or Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                        placeholder="Enter your email or mobile number"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                        placeholder="Enter your password"
                                    />
                                    <div className="flex justify-between">
                                        <a href="#" className="inline-block align-baseline text-sm text-black font-medium hover:text-white">
                                            Forgot Password?
                                        </a>
                                        <Link to="/register" className="inline-block align-baseline text-sm text-black font-medium hover:text-white">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Select Role</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center text-lg">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="bank"
                                                checked={role === 'bank'}
                                                onChange={() => setRole('bank')}
                                                className="mr-2"
                                            />
                                            Bank
                                        </label>
                                        <label className="flex items-center text-lg">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="Manager"
                                                checked={role === 'Manager'}
                                                onChange={() => setRole('Manager')}
                                                className="mr-2"
                                            />
                                            Credit Manager
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Login;
