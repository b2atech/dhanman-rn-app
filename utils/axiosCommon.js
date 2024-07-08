import axios from "axios";
import { getToken } from "./token";
const axiosCommonServices = axios.create({
  baseURL: "https://api-dhanman-common-nonprod.azurewebsites.net/api/",
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosCommonServices.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await getToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error("Error retrieving", error);
    }
    return config;
  },
  (error) => {
    const errorMessage = "Something went wrong: " + error.message;
    const customError = new Error(errorMessage);
    return Promise.reject(customError);
  }
);

axiosCommonServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !window.location.href.includes("/login")
    ) {
      window.location.pathname = "/maintenance/500";
    }
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosCommonServices;

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosCommonServices.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosCommonServices.post(url, { ...config?.data });

  return res.data;
};

export const fetcherPut = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosCommonServices.put(url, { ...config?.data });

  return res.data;
};
