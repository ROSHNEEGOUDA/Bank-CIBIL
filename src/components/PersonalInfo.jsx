import React, { useState } from "react";

const PersonalInfo = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('personal')}>
                <h2 className="text-xl font-bold">Personal Information<span className="text-red-700">*</span></h2>
                <span>{openSection === 'personal' ? "▲" : "▼"}</span>
            </div>
            {openSection === 'personal' && (
                <div className="mt-4">
                    {["ADAAHAR NUMBER", "PAN NUMBER", "Phone Number"].map((field, i) => (
                        <div key={i} className="mb-2">
                            <label className="block font-bold mb-1">{field}<span className="text-red-700">*</span>:</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );


}

export default PersonalInfo;