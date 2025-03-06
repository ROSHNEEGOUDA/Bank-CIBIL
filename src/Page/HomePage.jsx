import React, { useState, useRef, useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import TransitionAsset from "../components/TransitionAsset";
import PersonalInfo from "../components/PersonalInfo";
import IncomeInfo from "../components/IncomeInfo";
import BusinessInfo from "../components/BusinessInfo";
import ResultCard from "../components/ResultCard";
import BalanceSheet from "../components/BalanceSheet";
import MoreDetail from "../components/MoreDetail";

const HomePage = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const [openSection, setOpenSection] = useState(null);
    const [hasLoan, setHasLoan] = useState(null);
    const [utilityFields, setUtilityFields] = useState(["Electricity ", "Water "]);
    const [newUtility, setNewUtility] = useState("");
    const [isApproved, setIsApproved] = useState(false);
    const inputRef = useRef(null);

    const handleSubmit = () => {
        setIsApproved(true);
    };

    const closeModal = () => {
        setIsApproved(false);
    };

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
        <div className="p-6 bg-gray-100 min-h-screen pb-20 md:pb-4 relative">
            <h1 className="text-2xl font-bold mb-6">Financial Information</h1>

            {/* Personal & Business Information */}
            <div className="grid grid-cols-2 gap-6">
                <PersonalInfo />
                <BusinessInfo />
            </div>

            {/* Income Information */}
            <IncomeInfo />

            {/* Utility Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('utility')}>
                    <h2 className="text-xl font-bold">
                        Utility Information <span className="text-red-700">*</span>
                    </h2>
                    <span>{openSection === 'utility' ? "▲" : "▼"}</span>
                </div>

                {openSection === 'utility' && (
                    <div className="mt-4">
                        {utilityFields.map((field, i) => (
                            <div key={i} className="mb-2">
                                <label className="block font-bold mb-1">{field}:</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                            </div>
                        ))}

                        {/* Add New Utility Field */}
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Add new utility..."
                                value={newUtility}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
                                onClick={addUtilityField}
                            >
                                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                Add
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <TransitionAsset />

            {/* Balance Sheet Upload */}
            <BalanceSheet />

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

            <MoreDetail />

            {/* Submit Button */}
            <div className="p-6">
                <div className="flex justify-center mb-6">
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-200 
                           hover:shadow-md hover:translate-y-[2px] hover:bg-green-700 
                           active:shadow-sm active:translate-y-[8px]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            {isApproved && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl text-center transform scale-95 transition-transform duration-300 ease-out max-w-md w-full mx-4">
                        <ResultCard />
                        <button
                            className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}


        </div>
    );

    return <>{isMobile ? <p></p> : <DesktopView />}</>;
};

export default HomePage;
