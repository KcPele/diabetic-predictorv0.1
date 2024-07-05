"use client";
import { useState } from "react";
import InputField from "./InputField";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heart_disease: "",
    bmi: "",
    HbA1c_level: "",
    blood_glucose_level: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    setFormSubmitted(true);
    console.log(formData);
  };

  if (formSubmitted) {
    return (
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Form Submitted</h2>
        <p>Thank you for submitting your information!</p>
        <p>Result</p>
      </div>
    );
  }

  switch (step) {
    case 1:
      return (
        <div className="md:flex-1 w-full p-8 mt-10 ">
          <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
          <form>
            <label className="block mb-2">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full bg-transparent mt-1 p-2 border rounded"
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
              placeholder="Enter Age"
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
        <div className="md:flex-1 w-full p-8 mt-10  ">
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
              placeholder="Enter Hypertension Level"
            />

            <InputField
              level="Heart Disease"
              name="heart_disease"
              type="number"
              value={formData.heart_disease}
              handleChange={handleChange}
              placeholder="Enter Heart Disease Level"
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
        <div className="md:flex-1 w-full p-8 mt-10 ">
          <h2 className="text-2xl font-bold mb-4">Step 3: Health Metrics</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              level="BMI"
              name="bmi"
              type="number"
              step="0.01"
              value={formData.bmi}
              handleChange={handleChange}
              placeholder="
              Enter BMI Level 0.1"
            />

            <InputField
              level="HbA1c Level"
              name="HbA1c_level"
              type="number"
              value={formData.HbA1c_level}
              handleChange={handleChange}
              placeholder="Enter HbA1c Level"
            />

            <InputField
              level="Blood Glucose Level"
              name="blood_glucose_level"
              type="number"
              value={formData.blood_glucose_level}
              handleChange={handleChange}
              placeholder="Enter Blood Glucose Level"
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
      return null;
  }
};

export default MultiStepForm;
