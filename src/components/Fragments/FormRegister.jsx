/* eslint-disable react/prop-types */
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="/" method="post">
      <InputForm type="text" htmlFor="fullname" placeholder="Type your name">
        Full Name
      </InputForm>
      <InputForm type="email" htmlFor="email" placeholder="example@email.com">
        Email
      </InputForm>
      <InputForm type="password" htmlFor="password" placeholder="***********">
        Password
      </InputForm>
      <InputForm
        type="password"
        htmlFor="confirmPassword"
        placeholder="***********"
      >
        Confirm Password
      </InputForm>
      <p className="font-medium text-slate-500 mb-8">
        By clicking Register, you agree to our Terms, Data Policy and Cookie
        Policy.
      </p>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
