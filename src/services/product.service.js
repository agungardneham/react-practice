import axios from "axios";

// export const getProducts = (callback) => {
//   axios
//     .get("https://fakestoreapi.com/products")
//     .then((res) => {
//       callback(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
export const getProducts = async (callback) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetail = async (id, callback) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
