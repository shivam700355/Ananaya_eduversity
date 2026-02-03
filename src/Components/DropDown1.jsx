import React from "react";
import DropDown1 from "./DropDown1";

const DropDown1 = ({ label, name, districtdata = [] }) => {
  return (
    <>
      <label classname="flexfont-semibold mt-3">{label}</label>
      <select name={name}>
        <option value="">select {label}</option>
        {districtdata.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown1;
