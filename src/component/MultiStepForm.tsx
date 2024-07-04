// components/MultiStepForm.js
"use client";
import { useState } from "react";
import InputField from "./InputField";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heart_disease: "",
    bmi: "",
    HbA1c_level: "",
    blood_glucose_level: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  switch (step) {
    case 1:
      return (
        <div className="flex-1 w-full p-8 mt-10 shadow-md ">
          <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
          <form>
            <label className="block mb-2">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border rounded"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <InputField
              level="Age"
              name="age"
              type="number"
              value={formData.age}
              handleChange={handleChange}
            />

            <div className="mt-2 flex w-full justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      );
    case 2:
      return (
        <div className="flex-1 bg-white p-8 mt-10 shadow-md ">
          <h2 className="text-2xl font-bold mb-4">
            Step 2: Health Information
          </h2>
          <form>
            <InputField
              level="Hypertension"
              name="hypertension"
              type="number"
              value={formData.hypertension}
              handleChange={handleChange}
            />

            <InputField
              level="Heart Disease"
              name="heart_disease"
              type="number"
              value={formData.heart_disease}
              handleChange={handleChange}
            />

            <div className="mt-2 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      );
    case 3:
      return (
        <div className="flex-1 bg-white p-8 mt-10 shadow-md ">
          <h2 className="text-2xl font-bold mb-4">Step 3: Health Metrics</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              level="BMI"
              name="bmi"
              type="number"
              step="0.01"
              value={formData.bmi}
              handleChange={handleChange}
            />
            {/* <label className="block mb-2">
              BMI:
              <input
                type="number"
                step="0.01"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border rounded"
              />
            </label> */}
            <InputField
              level="HbA1c Level"
              name="HbA1c_level"
              type="number"
              value={formData.HbA1c_level}
              handleChange={handleChange}
            />

            <InputField
              level="Blood Glucose Level"
              name="blood_glucose_level"
              type="number"
              value={formData.blood_glucose_level}
              handleChange={handleChange}
            />

            <div className="mt-2 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    default:
      return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 shadow-md ">
          <h2 className="text-2xl font-bold mb-4">Form Submitted</h2>
          <p>Thank you for submitting your information!</p>
        </div>
      );
  }
};

export default MultiStepForm;
