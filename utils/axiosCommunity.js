import axios from "axios";
import { getToken } from "./token";
const axiosCommunityServices = axios.create({
  baseURL: "https://api-dhanman-myhome-nonprod.azurewebsites.net/api/",
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosCommunityServices.interceptors.request.use(
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

axiosCommunityServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !window.location.href.includes("/login")
    ) {
      window.location.pathname = "/maintenance/500";
    }

    const errorMessage =
      typeof error?.response?.data === "string"
        ? error.response.data
        : "Wrong Services";
    const errorObject = new Error(errorMessage);
    return Promise.reject(errorObject);
  }
);

export default axiosCommunityServices;

export const fetcher = async (url, config) => {
  try {
    const res = await axiosCommunityServices.get(url, { ...config });
    return res.data;
  } catch (error) {
    console.error("Fetcher Error:", error);
    throw error;
  }
};

export const fetcherPost = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  try {
    const res = await axiosCommunityServices.post(url, config.data);
    return res.data;
  } catch (error) {
    console.error("Fetcher Post Error:", error);
    throw error;
  }
};

export const fetcherPut = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosCommunityServices.put(url, { ...config?.data });

  return res.data;
};
