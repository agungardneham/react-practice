import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
const TableCart = (props) => {
  const { products, classname } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatch]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${classname}`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title}</td>
                <td>
                  {product.price.toLocaleString(`en-US`, {
                    style: `currency`,
                    currency: `USd`,
                  })}
                </td>
                <td className="text-center">{item.qty}</td>
                <td>
                  {(item.qty * product.price).toLocaleString(`en-US`, {
                    style: `currency`,
                    currency: `USD`,
                  })}
                </td>
              </tr>
            );
          })}
        {/* {cartRef.current.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return (
          <tr key={item.id}>
            <td>{product.name}</td>
            <td>
              {product.price.toLocaleString(`id-ID`, {
                style: `currency`,
                currency: `IDR`,
              })}
            </td>
            <td className="text-center">{item.qty}</td>
            <td>
              {(item.qty * product.price).toLocaleString(`id-ID`, {
                style: `currency`,
                currency: `IDR`,
              })}
            </td>
          </tr>
        );
      })} */}
        <tr ref={totalPriceRef}>
          <td colSpan={3} className="text-center">
            <b>Total Price</b>
          </td>
          <td>
            <b>
              {total
                ? total.toLocaleString(`en-US`, {
                    style: `currency`,
                    currency: `USD`,
                  })
                : null}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
