import MultiStepForm from "@/component/MultiStepForm";
import React from "react";

const Predict = () => {
  return (
    <div className="min-h-screen mx-auto max-w-6xl flex items-center justify-center flex-col md:flex-row">
      <h1 className="text-4xl font-bold mb-8 flex-1">
        Diabetes Prediction Form
      </h1>
      <MultiStepForm />
    </div>
  );
};

export default Predict;
