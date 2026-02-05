import { useState } from "react";
import InputText from "./InputText";
import RadioButton from "./RadioButton";
import DropDown from "./DropDown";

const states = ["Delhi", "Maharashtra", "Gujarat"];
const districts = ["District 1", "District 2", "District 3"];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (username && password) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setUsername("");
        setPassword("");
      }, 3000);
    } else {
      setSuccess(false);
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <InputText
          label="Username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputText
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="font-semibold mt-3">Gender</p>
        <RadioButton label="Female" name="gender" />
        <RadioButton label="Male" name="gender" />

        <DropDown label="State" options={states} />
        <DropDown label="District" options={districts} />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition"
        >
          Login
        </button>

        {success && (
          <p className="text-green-500 text-center mt-4 font-semibold">
            Login Successful ✅
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
