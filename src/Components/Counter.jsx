import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState([10,20,30,40,50]);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <p className="text-xl font-semibold mb-4">
          You have clicked <span className="text-blue-600">{count[1]}</span> times</p>
      </div>

    </div>
  );
};






// const [todos, setTodos] = useState([Study]);

//   return (
//     <ul>
//       {/* Loop through the 'todos' array using map() */}
//       {todos.map((todo) => (
//         // Key is important for React to track elements efficiently
//         <li key={todo.id}>
//           {todo.text}
//         </li>
//       ))}
//     </ul>
//   );
// }

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


// export default Counter;









// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState([10, 20, 30, 40, 50]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="bg-white p-8 rounded-xl shadow-lg text-center">

//         <h2 className="text-2xl font-bold mb-6">Counter List</h2>

//         {count.map((item, index) => (
//           <p key={index} className="text-lg mb-2">
//             Counter {index + 1}: 
//             <span className="text-blue-600 font-semibold"> {item} </span>
//           </p>
//         ))}

//       </div>

//     </div>
//   );
// };

export default Counter;
