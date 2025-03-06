import React,{useState} from "react";

const IncomeInfo = () => {
    const [openSection, setOpenSection] = useState(null);
        const toggleSection = (section) => {
            setOpenSection(openSection === section ? null : section);
        };
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                {/* Income Information Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('income')}>
                    <h2 className="text-xl font-bold">Income Information<span className="text-red-700">*</span></h2>
                    <span>{openSection === 'income' ? "▲" : "▼"}</span>
                </div>

                {openSection === 'income' && (
                    <div className="mt-4">
                        {/* Personal Income */}
                        <h3 className="text-lg font-semibold mt-4">Personal Income</h3>
                        {["Salary Income", "Other Personal Income"].map((field, i) => (
                            <div key={i} className="mb-2">
                                <label className="block font-bold mb-1">{field}:</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                            </div>
                        ))}

                        {/* Business Income */}
                        <h3 className="text-lg font-semibold mt-4">Business Income</h3>
                        {["Revenue", "Profit", "Other Business Income"].map((field, i) => (
                            <div key={i} className="mb-2">
                                <label className="block font-bold mb-1">{field}:</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder={`Enter ${field}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
    );
}

export default IncomeInfo;