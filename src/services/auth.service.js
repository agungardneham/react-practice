import axios from "axios";
import jwt_decode from "jwt-decode";

// export const login = (data, callback) => {
//   axios
//     .post("https://fakestoreapi.com/auth/login", data)
//     .then((res) => {
//       callback(true, res.data.token);
//     })
//     .catch((error) => {
//       callback(false, error);
//     });
// };
export const login = async (data, callback) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (error) {
    callback(false, error);
  }
};

export const getUsername = (token) => {
  const decode = jwt_decode(token);
  return decode.user;
};
