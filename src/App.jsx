/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
// import React from "react";
// import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

// Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-black text-white mx-5"
//         type="submit"
//       >
//         Buy Now
//       </button>
//     );
//   }
// }

// Function Component
// function Button2(props) {
//   const { children } = props;
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white mx-5"
//       type="submit"
//     >
//       {children}
//     </button>
//   );
// }

// Function component (stored in const and used arrow function)
// const Button3 = () => {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white mx-5"
//       type="submit"
//     >
//       Buy Now
//     </button>
//   );
// };

function App() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export default App;
