<<<<<<< HEAD
import React from "react";

const DropDown = ({
  label,
  name,
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label className="block font-semibold mb-1">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select {label}</option>

        {options.map((item, index) => (
=======
const DropDown = ({ label, value, onChange, data, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>

      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 "
      >
        <option value="">Select {label}</option>
        {data.map((item, index) => (
>>>>>>> 2293f84 (Updated HeroSection and auto slider)
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
