import BackIcon from "@/component/BackIcon";
import MultiStepForm from "@/component/MultiStepForm";
import Link from "next/link";
import React from "react";

const Predict = () => {
  return (
    <div className="mx-auto max-w-6xl h-screen  p-6 flex items-center justify-center flex-col md:flex-row">
      <div className="md:flex-1 flex flex-col">
        <Link
          href="/"
          className="
        flex"
        >
          <BackIcon />
          Back
        </Link>
        <h1 className="text-4xl font-bold ">Diabetes Prediction Form</h1>
      </div>
      <MultiStepForm />
    </div>
  );
};

export default Predict;
