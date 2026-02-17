import React, { useState } from "react";
import InputText from "./InputText";
import RadioButton from "./RadioButton";
import DropDown from "./DropDown";

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [success, setSuccess] = useState(false);
  const [gender, setGender] = useState("");

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const state = ["Maharashtra", "Uttar Pradesh", "MP"];

  const district = [
    "Mumbai",
    "Pune",
    "Lucknow",
    "Noida",
    "Bhopal",
    "Gwalior",
  ];

  const [error, setError] = useState("");

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Name.length < 3) {
      setError("Name must be at least 3 characters");
      return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError("Mobile number must be exactly 10 digits");
      return false;
    }

    if (!emailRegex.test(Email)) {
      setError("Enter a valid email address");
      return false;
    }

    if (!selectedState) {
      setError("State is required");
      return false;
    }

    if (!selectedDistrict) {
      setError("District is required");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = () => {
    if (handleValidation()) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setName("");
        setEmail("");
        setMobile("");
        setGender("");
        setSelectedState("");
        setSelectedDistrict("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-5 rounded-lg hover:shadow-md w-80">
        <h2 className="text-center text-xl font-bold mb-4 underline">
          Registration Form
        </h2>

        <InputText
          label="Name"
          placeholder="Enter Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputText
          label="Mobile Number"
          placeholder="Enter Phone Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <InputText
          label="Email ID"
          placeholder="Enter Email ID"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="font-semibold">Gender:</p>

        <RadioButton
          label="Female"
          name="gender"
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />

        <RadioButton
          label="Male"
          name="gender"
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />

        <DropDown
          label="State"
          data={state}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        />

        <DropDown
          label="District"
          data={district}
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedState}
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-2 font-semibold">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 font-bold"
        >
          Submit
        </button>

        {success && (
          <p className="text-green-500 text-center mt-4 font-semibold">
            Submitted Successfully ✅
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
