import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ResultCard = () => {
    return (
        <div className="flex justify-center items-center">
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className=" p-8 rounded-xl shadow-2xl text-center border border-gray-200 
                           backdrop-blur-lg bg-opacity-80 transition-all duration-300 
                           hover:shadow-2xl hover:-translate-y-1"
            >
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-green-500 text-7xl mb-3 drop-shadow-md" 
                    />
                </motion.div>
                <motion.h2 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="text-2xl font-bold text-gray-800"
                >
                    Loan Approved
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-gray-600 mt-2"
                >
                    Congratulations! Your loan has been successfully approved.
                </motion.p>
            </motion.div>
        </div>
    );
}

export default ResultCard;
