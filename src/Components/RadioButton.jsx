import React from "react";

<<<<<<< HEAD
const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center mr-6 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
=======
const RadioButton = ({ label, type, name }) => {
  return (
    <>
      <label> {label}</label>
      <input type={type} name={name} className=" mr-6" />
    </>
>>>>>>> 2293f84 (Updated HeroSection and auto slider)
  );
};

export default RadioButton;
