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
        ] = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IloxenFhbmlBZWowRWlyN1ZVZ281VCJ9.eyJkaGFubWFuX2lkIjoiNzQ0NWYwNzMtYmJiMS00NmYxLWIyZDEtNDIxNThlOGM2NzQzIiwiZGhhbm1hbl9jb21wYW55Ijp7ImRlc2NyaXB0aW9uIjoiQXBhcnRtZW50IE15SG9tZSAiLCJnc3RJbiI6IjI3RkdISUo1Njc4SzNMOCIsImlkIjoiMTJmYjUwZjAtOTk5OC00NTZmLThhZWUtYmI4M2FiMmZiYmRiIiwiaXNBcGFydG1lbnQiOnRydWUsIm5hbWUiOiJBc3BlbiBXb29kcyBBcGFydG1lbnQiLCJvcmdhbml6YXRpb25JZCI6IjM3NDM3ZTE3LWMwZTItNGU5Ny04MTY3LTEyMWI4NTRmZTkwYiJ9LCJpc3MiOiJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNjM3Mjc4MTU2NDU2Njc5Mzg4OSIsImF1ZCI6WyJkZXYtZGhhbm1hbi1hcGkiLCJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjA3MDI4NTMsImV4cCI6MTcyMDc4OTI1Mywic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF6cCI6IjJhWmJzVUN1U0s1M1hCN3NkT0tUaEYwY0NoVkRYeDI4In0.qlSzBiWnQcnv4tOa2_wCYp3G5l5-LCLuM5YoRC-QR6mICuZhIHbtdmKDj8CxW7xDX3iaf26zhJqjGAMR0deyWpPzMZT-aosAPCHSbjfMM49Iya2bzkNnINll70KGi-pDaV6lIK0IB3mlcvgoUeON4U-Vma_x3pw4jrwG8TVW4pDJ2BG-KU1I-TSNxdy_LIGSFN2dGh993puuAyxNic6LIeffAclH_tR3f2lixN4jg30PeuaFCxyYHV50hvOWzv1n3eJRtoWWtJVlu100fXZGx94cxJkTxOIzFE98LftOjQqqk_EEAD6CkgqDqJXUoYhtW8v_h0C4gQYsX8yYDdUpTg`;
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
