import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import TransitionAsset from "../components/TransitionAsset";
import PersonalInfo from "../components/PersonalInfo";
import IncomeInfo from "../components/IncomeInfo";

const HomePage = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const [openSection, setOpenSection] = useState(null);
    const [hasLoan, setHasLoan] = useState(null);
    const [utilityFields, setUtilityFields] = useState(["Electricity Bill", "Water Bill"]);
    const [newUtility, setNewUtility] = useState("");
    const inputRef = useRef(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const addUtilityField = useCallback((e) => {
        e.preventDefault();
        if (newUtility !== "" && !utilityFields.includes(newUtility)) {
            setUtilityFields((prev) => [...prev, newUtility]);
            setNewUtility("");
        }
    }, [newUtility, utilityFields]);

    const handleInputChange = (e) => {
        setNewUtility(e.target.value);
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [newUtility]);

    const DesktopView = () => (
        <div className="p-6 bg-gray-100 min-h-screen pb-20 md:pb-4">
            <h1 className="text-2xl font-bold mb-6">Financial Information</h1>

            {/* Personal Information */}
           <PersonalInfo/>

            {/* Income Information */}
            <IncomeInfo/>


            {/* Utility Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('utility')}>
                    <h2 className="text-xl font-bold">Utility Information<span className="text-red-700">*</span></h2>
                    <span>{openSection === 'utility' ? "▲" : "▼"}</span>
                </div>
                {openSection === 'utility' && (
                    <div className="mt-4">
                        {["Electricity", "Water"].map((field, i) => (
                            <div key={i} className="mb-2">
                                <label className="block font-bold mb-1">{field}:</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                            </div>
                        ))}
                        <div className="mt-4">
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full p-2 border rounded mb-2"
                                placeholder="Add new utility..."
                                value={newUtility}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={addUtilityField}
                            >
                                Add Utility
                            </button>

                        </div>
                    </div>
                )}
            </div>

            <TransitionAsset/>

            {/* Balance Sheet Upload */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('balance')}>
                    <h2 className="text-xl font-bold">Balance Sheet / Asset Sheet <span className="text-red-700">*</span></h2>
                    <span>{openSection === 'balance' ? "▲" : "▼"}</span>
                </div>
                {openSection === 'balance' && (
                    <div className="mt-4">
                        <label className="block font-bold mb-1">Upload File:</label>
                        <input type="file" className="w-full p-2 border rounded" />
                    </div>
                )}
            </div>

            {/* Loan Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('loan')}>
                    <h2 className="text-xl font-bold">Loan Information</h2>
                    <span>{openSection === 'loan' ? "▲" : "▼"}</span>
                </div>
                {openSection === 'loan' && (
                    <div className="mt-4">
                        <label className="block mb-2 font-bold">Do you have a loan?</label>
                        <div className="flex space-x-4 mb-4">
                            <button type="button" className={`p-2 w-20 rounded ${hasLoan === true ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setHasLoan(true)}>Yes</button>
                            <button type="button" className={`p-2 w-20 rounded ${hasLoan === false ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setHasLoan(false)}>No</button>
                        </div>
                        {hasLoan && (
                            <div className="mt-4">
                                {["Loan Amount", "Loan Provider", "Monthly EMI"].map((field, i) => (
                                    <div key={i} className="mb-2">
                                        <label className="block font-bold mb-1">{field}:</label>
                                        <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );


    return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

export default HomePage;
