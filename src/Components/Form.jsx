import { useState } from "react";
import InputText from "./InputText";
import { Input } from "postcss";
import RadioButton from "./RadioButton";
import DropDown from "./DropDown";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
      setTimeout(() => {
        setSuccess(false);
        setUsername("");
        setPassword("");
      }, 5000);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <InputText label={"Name"} type={"Text"} placeholder={"Enter Name"} />
        <InputText
          label={"Mobile Number"}
          type={"number"}
          placeholder={"Enter mobile Number"}
        />
        <InputText label={"Email"} type={"text"} placeholder={"Email ID"} />

        <p className="font-semibold">Gender</p>
        <RadioButton label={"Female"} type={"radio"} name={"gender"} />
        <RadioButton label={"Male"} type={"radio"} name={"gender"} />

        <DropDown label={"Sate"} name={"State"} statedata={State} />
        <DropDown1
          label={"district"}
          name={"district"}
          districtdata={district}
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>

        {success && (
          <p className="text-green-500 text-center mt-4 font-semibold">
            Login Successfull
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
