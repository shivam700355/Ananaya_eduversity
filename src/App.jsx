import RegistrationForm  from "./pages/RegistrationForm";
import SignUpForm from "./pages/SignUpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from "./Components/Counter";
// import { useEffect, useState } from "react";
import  {StringHookExample} from "./Components/StringHookExample";
import Product from "./Components/Product";
import TopSpecializations from "./pages/TopSpecializations";
import UniversitiesCourses from "./pages/UniversitiesCourses";
import Header from "./Components/Food/Header";



function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     alert("I will run on each render")
// })
//   function handleClick() {
//     setCount(count+1);
//   }
//   return ( 
//     <div>
//       <button onClick={handleClick}>
//         click</button>
//         <br/>
//         Count is: {count}


    return(
     <div>




  {/* <RegistrationForm/> */}
  {/* <SignUpForm/> */}
  {/* <ToastContainer position="top-right" autoClose={2000} /> */}
  {/* <Counter/> */}
  {/* <StringHookExample/> */}
  {/* <Product/> */}
  {/* <TopSpecializations/> */}
  <UniversitiesCourses/>
  {/* <Header/> */}
  </div>
    );
  }
  // </div>





 export default App;
