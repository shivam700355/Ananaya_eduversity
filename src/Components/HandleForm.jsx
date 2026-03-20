import React from "react";
import InputField from "./InputField";

export default function HandleForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      <InputField
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>

    </form>
  );
}