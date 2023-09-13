/* eslint-disable react/prop-types */
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handeLogin = (e) => {
    e.preventDefault();
    // save data to local storage
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        localStorage.setItem("username", e.target.username.value);
        console.log("login success");
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handeLogin}>
      <InputForm
        type="text"
        htmlFor="username"
        placeholder="Type your username"
        ref={usernameRef}
      >
        Username
      </InputForm>
      <InputForm type="password" htmlFor="password" placeholder="***********">
        Password
      </InputForm>
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 mt-5 text-center">Error: {loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
