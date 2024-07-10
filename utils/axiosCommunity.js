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
        config.headers[
          "Authorization"
        ] = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IloxenFhbmlBZWowRWlyN1ZVZ281VCJ9.eyJkaGFubWFuX2lkIjoiNzQ0NWYwNzMtYmJiMS00NmYxLWIyZDEtNDIxNThlOGM2NzQzIiwiZGhhbm1hbl9jb21wYW55Ijp7ImRlc2NyaXB0aW9uIjoiQXBhcnRtZW50IE15SG9tZSAiLCJnc3RJbiI6IjI3RkdISUo1Njc4SzNMOCIsImlkIjoiMTJmYjUwZjAtOTk5OC00NTZmLThhZWUtYmI4M2FiMmZiYmRiIiwiaXNBcGFydG1lbnQiOnRydWUsIm5hbWUiOiJBc3BlbiBXb29kcyBBcGFydG1lbnQiLCJvcmdhbml6YXRpb25JZCI6IjM3NDM3ZTE3LWMwZTItNGU5Ny04MTY3LTEyMWI4NTRmZTkwYiJ9LCJpc3MiOiJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNjM3Mjc4MTU2NDU2Njc5Mzg4OSIsImF1ZCI6WyJkZXYtZGhhbm1hbi1hcGkiLCJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjA1Mjc3NDgsImV4cCI6MTcyMDYxNDE0OCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF6cCI6IjJhWmJzVUN1U0s1M1hCN3NkT0tUaEYwY0NoVkRYeDI4In0.hS9OJR63V-ferpvPYDJX6bHsQyOi_yS9F1cxXO-7_tWun81M1PRsE-WkM1ay3Dj4HcH3wdhv1SqRCR3BXYSG5gdICW4qGZlPM9d6C7VW8wFt4ot7QL-gZd-fhDtJA-li66iWzRpNSIYdlrZWAk7pBvl8lGBsmSEbBAvLbbgJI08dejCacOQ3N7PoaIz3sotwLqUYXCdD7nzk1zTOxYAO_zvwI6NoR2CxYl20uJ5vUoP-xVS5QD2qalieLu370kpZGrYjx5kZNYRB7wpi0U62z1Ofj8uDUlk39Kj-0La4xgEHd8vNrSA3m6mCqTR9yEG5P8WqPqFU9nhV1CZEVDvpeQ`;
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
