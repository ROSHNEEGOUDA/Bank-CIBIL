import React from "react";
import Background from "../Background/Background";

const Emptypage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="bg-white w-[40rem] p-6 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to the Website</h1>
                <p className="text-gray-600 mt-4">
                    <strong>Empowering Banks, Enabling Businesses.</strong>
                </p>
                <p className="text-gray-600 mt-2">
                    At <strong>Citi</strong>, we understand that <strong>small businesses and startups</strong> are the backbone of the economy. However, assessing their creditworthiness has always been a challenge due to limited credit history. That’s where our <strong>AI-powered CIBIL Credit Scorer</strong> comes in—bringing innovation, accuracy, and financial inclusivity to loan approvals.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-4">Why Choose Our Credit Scorer?</h2>
                <ul className="text-gray-600 text-left mt-2 space-y-2">
                    <li><strong>AI-Driven Accuracy:</strong> Leverages advanced <strong>Machine Learning models</strong> to analyze financial transactions, risk factors, and business stability.</li>
                    <li><strong>Faster Loan Approvals:</strong> Instantly evaluates <strong>creditworthiness</strong> to determine loan amounts, interest rates, and repayment terms.</li>
                    <li><strong>Expanding Financial but have strong business potential</strong>.</li>
                    <li><strong>Data-Backed Risk Evaluation:</strong> Helps banks make <strong>smart, secure lending decisions</strong>, reducing loan defaults.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔍 Get Started Today!</h2>
                <p className="text-gray-600 mt-2">
                    Assess small business creditworthiness with confidence. Make informed lending decisions that drive growth—for both your bank and the businesses you support.
                </p>
            </div>
        </div>
    );
};

export default Emptypage;
