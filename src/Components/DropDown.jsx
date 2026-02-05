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
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
