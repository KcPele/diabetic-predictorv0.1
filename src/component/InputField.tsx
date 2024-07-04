import React from "react";
interface Prop {
  value: string;
  name: string;
  type: string;
  level: string;
  step?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({ value, name, type, handleChange, level, step }: Prop) => {
  return (
    <>
      <label className="block my-2">
        {level}
        <input
          type={type}
          name={name}
          value={value}
          step={type === "number" ? step : ""}
          onChange={handleChange}
          className=" w-full mt-1 p-4 border rounded"
        />
      </label>
    </>
  );
};

export default InputField;
