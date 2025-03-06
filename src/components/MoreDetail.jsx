import React, { useState } from "react";

const MoreDetail = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const fields = [
        "Annual Revenue (in Rs)", "Profit Margin (%)", "Cash Flow Stability (%)",
        "Debt-to-Income Ratio", "Working Capital Ratio", "GST Compliance (%)",
        "Loan Amount (in Rs)", "Credit Utilization Ratio (%)", "Past Defaults",
        "Days Past Due (DPD)", "Cheque Bounce Count", "Banking Transaction Volume",
        "E-commerce Revenue (in Rs)", "Supplier Payment Timeliness (%)",
        "Social Media Engagement Score", "Legal Cases Count", "Online Presence Index",
        "Business Growth Rate (%)", "Utility Bills (in Rs)", "Current Assets (in Rs)"
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('financial')}
            >
                <h2 className="text-xl font-bold">More Details <span className="text-red-700">*</span></h2>
                <span>{openSection === 'financial' ? "▲" : "▼"}</span>
            </div>
            {openSection === 'financial' && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fields.map((field, i) => (
                        <div key={i} className="mb-2">
                            <label className="block font-bold mb-1">{field}<span className="text-red-700">*</span>:</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded" 
                                placeholder={`Enter ${field}`} 
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MoreDetail;
