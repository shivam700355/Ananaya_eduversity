import React, { useState } from "react";
import bg from "../assets/companies/bg_img1.jpg";
import HandleForm from "../Components/HandleForm";

export default function SignUpForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit + DummyJSON API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email and Password required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.email,   // DummyJSON expects username
          password: formData.password
        })
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (response.ok) {
        alert("API Connected Successfully!");

        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

      } else {
        alert(data.message || "Login Failed");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("API error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/90 p-6 rounded-lg shadow-lg w-80">

        <h2 className="text-2xl font-bold text-center mb-4">
          Sign Up
        </h2>

        <HandleForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

      </div>
    </div>
  );
}