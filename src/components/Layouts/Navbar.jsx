import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
      Hello! {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        item: {totalCart} | price:{" "}
        {total.toLocaleString(`en-US`, { style: `currency`, currency: `USD` })}
      </div>
      <Button
        classname="bg-black px-10 mx-5 text-white rounded"
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
