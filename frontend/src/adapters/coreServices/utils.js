import axios from "axios";
import config from "../utils";

// const axiosConfig = {
//    axiosInstance : null
// };

// const createAxiosInstance = (ACCESS_TOKEN) => {
//     const instance = axios.create({
//         baseURL: config.BASE_URL,
//         headers: {
//             // Authorization: `Bearer ${ACCESS_TOKEN}`,
//             "Content-Type": "application/json",
//         },
//     });
//     axiosConfig.axiosInstance = instance;
// }

const axiosInstance = axios.create({
    baseURL: config.BASE_URL,
    headers: {
    //   'Authorization': 'Bearer your_token',
      "Content-Type": "application/json",
    },
  });

  export const axiosConfig = {
    axiosInstance,
  };

// export { createAxiosInstance, axiosConfig };