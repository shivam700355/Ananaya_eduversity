import React, { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    currentAddress: "",
    permanentAddress: "",
    pincode: "",
    course: "",
    batch: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load from LocalStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z]+$/;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Only alphabets allowed";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.currentAddress)
      newErrors.currentAddress = "Current address is required";

    if (!formData.permanentAddress)
      newErrors.permanentAddress = "Permanent address is required";

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!formData.course) newErrors.course = "Please select course";
    if (!formData.batch) newErrors.batch = "Please select batch";
    if (!formData.gender) newErrors.gender = "Please select gender";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      currentAddress: "",
      permanentAddress: "",
      pincode: "",
      course: "",
      batch: "",
      gender: "",
      password: "",
    });

    setErrors({});
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Student Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">

          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
            />
            <p className="error">{errors.firstName}</p>
          </div>

          {/* Middle Name */}
          <div>
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name (Optional)"
              value={formData.middleName}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
            />
            <p className="error">{errors.lastName}</p>
          </div>

          {/* Email */}
          <div>
            <input type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange}
              className="input" />
            <p className="error">{errors.email}</p>
          </div>

          {/* Mobile */}
          <div>
            <input type="text" name="mobile" placeholder="Mobile"
              value={formData.mobile} onChange={handleChange}
              className="input" />
            <p className="error">{errors.mobile}</p>
          </div>

          {/* Pincode */}
          <div>
            <input type="text" name="pincode" placeholder="Pincode"
              value={formData.pincode} onChange={handleChange}
              className="input" />
            <p className="error">{errors.pincode}</p>
          </div>

          {/* Current Address */}
          <div className="md:col-span-3">
            <textarea name="currentAddress" placeholder="Current Address"
              value={formData.currentAddress} onChange={handleChange}
              className="input" />
            <p className="error">{errors.currentAddress}</p>
          </div>

          {/* Permanent Address */}
          <div className="md:col-span-3">
            <textarea name="permanentAddress" placeholder="Permanent Address"
              value={formData.permanentAddress} onChange={handleChange}
              className="input" />
            <p className="error">{errors.permanentAddress}</p>
          </div>

          {/* Course */}
          <div>
            <select name="course" value={formData.course}
              onChange={handleChange} className="input">
              <option value="">Select Course</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>MCA</option>
              <option>MBA</option>
            </select>
            <p className="error">{errors.course}</p>
          </div>

          {/* Batch */}
          <div>
            <select name="batch" value={formData.batch}
              onChange={handleChange} className="input">
              <option value="">Select Batch</option>
              <option>Morning</option>
              <option>Evening</option>
            </select>
            <p className="error">{errors.batch}</p>
          </div>

          {/* Gender */}
          <div>
            <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
            <label className="ml-3"><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
            <label className="ml-3"><input type="radio" name="gender" value="Other" onChange={handleChange}/> Other</label>
            <p className="error">{errors.gender}</p>
          </div>

          {/* Password */}
          <div className="md:col-span-3">
            <input type="password" name="password" placeholder="Password"
              value={formData.password} onChange={handleChange}
              className="input" />
            <p className="error">{errors.password}</p>
          </div>

          <div className="md:col-span-3">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
              {editIndex !== null ? "Update" : "Register"}
            </button>
          </div>
        </form>

        {/* Users List */}
        {users.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Registered Students</h3>
            {users.map((user, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg mb-3">
                <p><strong>Name:</strong> {user.firstName} {user.middleName} {user.lastName}</p>
                <p><strong>Course:</strong> {user.course}</p>
                <p><strong>Mobile:</strong> {user.mobile}</p>

                <div className="mt-2 flex gap-3">
                  <button onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>
        {`
          .input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            outline: none;
          }
          .error {
            color: red;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationForm;