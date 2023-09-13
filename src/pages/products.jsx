import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";
// import Counter from "../components/Fragments/Counter";

const ProductsPage = () => {
  // stateless component (react hook : useState)
  // const [cart, setCart] = useState([
  //   // {
  //   //   id: 1,
  //   //   qty: 1,
  //   // },
  // ]);

  // stateless component (react hook : useEffect similiar to componentDidMount and componentDidUpdate)
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id: id, qty: 1 }]);
  //   }
  // };

  // stateless component (react hook : useRef)
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id: id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  const [products, setProducts] = useState([]);
  useLogin();

  // get data from API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  // useContext for dark mode
  const { isDarkMode } = useContext(DarkMode);

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-7/12 flex flex-wrap">
          {/* nested component + array map to render all products */}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body name={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-5/12">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart
            products={products}
            classname={`${isDarkMode && "text-white"}`}
          ></TableCart>
        </div>
      </div>
      {/* <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductsPage;
