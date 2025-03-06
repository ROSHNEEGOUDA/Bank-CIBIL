import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
    const [openSection, setOpenSection] = useState(false);
    const [businessData, setBusinessData] = useState({
        companyName: "",
        companyRegId: "",
        companyAddress: ""
    });

    const toggleSection = () => {
        setOpenSection(!openSection);
    };

    const handleChange = (e) => {
        setBusinessData({ ...businessData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleSection}>
                <h2 className="text-xl font-bold">
                    Business Information <span className="text-red-700">*</span>
                </h2>
                <FontAwesomeIcon icon={openSection ? faChevronUp : faChevronDown} className="text-gray-600" />
            </div>

            {openSection && (
                <div className="mt-4">
                    <div className="mb-2">
                        <label className="block font-bold mb-1">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={businessData.companyName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Company Name"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block font-bold mb-1">Company Registration ID:</label>
                        <input
                            type="text"
                            name="companyRegId"
                            value={businessData.companyRegId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Registration ID"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block font-bold mb-1">Company Address:</label>
                        <textarea
                            name="companyAddress"
                            value={businessData.companyAddress}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Company Address"
                            rows="3"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusinessInfo;
