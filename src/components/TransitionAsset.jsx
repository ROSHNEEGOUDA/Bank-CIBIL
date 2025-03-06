import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const TransitionAsset = () => {
    const [openSection, setOpenSection] = useState(null);
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileURL(URL.createObjectURL(selectedFile)); 
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('asset')}>
                <h2 className="text-xl font-bold">Transition Asset <span className="text-red-700">*</span></h2>
                <span>{openSection === 'asset' ? "▲" : "▼"}</span>
            </div>
            {openSection === 'asset' && (
                <div className="mt-4">
                    <label className="block font-bold mb-1"><FontAwesomeIcon icon={faUpload} className="mr-2" />Upload File:</label>
                    <input type="file" className="w-full p-2 border rounded" onChange={handleFileChange} />

                    {file && (
                        <div className="mt-3 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faFile} className="text-black" />
                            <a href={fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                {file.name} (Click to Preview)
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default TransitionAsset;