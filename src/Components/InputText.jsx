import React from "react";

const InputText = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputText;
