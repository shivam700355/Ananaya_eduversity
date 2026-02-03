
import{ useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess]= useState(false);

  const handleSubmit = () => {
    if (username!== ""&& password !=="") {
        setTimeout(()=> {
            setSuccess(true);
        },2000);
        setTimeout(()=> {
            setSuccess(false);
            setUsername("");
            setPassword("");
        },5000);
    } else {
        setSuccess(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          
        </div>

  






        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        
        <button type="button" onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Login
        </button>

        {success && (
            <p className='text-green-500 text-center mt-4 font-semibold'>Login Successfull</p>
        )}
      
        
    </form>
    </div>

)
};

export default Login;