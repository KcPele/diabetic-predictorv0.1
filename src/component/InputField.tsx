import React from "react";
interface Prop {
  value: string;
  name: string;
  type: string;
  level: string;
  step?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({
  value,
  name,
  type,
  handleChange,
  level,
  step,
  placeholder,
}: Prop) => {
  return (
    <div className="">
      <label className="block my-2">
        {level}
        <input
          type={type}
          name={name}
          value={value}
          step={type === "number" ? step : ""}
          onChange={handleChange}
          placeholder={placeholder}
          className=" w-full mt-1 p-2 border rounded bg-transparent "
        />
      </label>
    </div>
  );
};

export default InputField;
