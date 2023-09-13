/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayouts = (props) => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <Button
          classname="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {/* COMPONENT IN SAME FILE */}
        <Navigation type={type} />
        {/* <p className="text-sm mt-5 text-center"> */}
        {/* CONDITIONAL RENDERING (TERNARY OPERATOR) FOR 2 CONDITIONS*/}
        {/* {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-500">
              Sign Up
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-500">
              Sign In
            </Link>
          )} */}
        {/* CONDITIONAL RENDERING (&& OPERATOR) FOR ABOVE 2 CONDITIONS */}
        {/* {type === "login" && (
            <Link to="/register" className="font-bold text-blue-500">
              Sign Up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-500">
              Sign In
            </Link>
          )} */}
        {/* </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Sign In
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
