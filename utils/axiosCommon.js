import axios from "axios";
import { getToken } from "./token";
const axiosCommonServices = axios.create({
  baseURL: "https://api-dhanman-common-nonprod.azurewebsites.net/api/",
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosCommonServices.interceptors.request.use(
  async (config) => {
    try {
      // const accessToken = await getToken();
      // if (accessToken) {
      config.headers[
        "Authorization"
      ] = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IloxenFhbmlBZWowRWlyN1ZVZ281VCJ9.eyJkaGFubWFuX2lkIjoiNjU5NGE5MmMtYjJjNC00ZjAyLTk3ZmMtNTY4MjI2ZTYxMmJmIiwiZGhhbm1hbl9jb21wYW55Ijp7ImRlc2NyaXB0aW9uIjoiQXBhcnRtZW50IE15SG9tZSAiLCJnc3RJbiI6IjI3RkdISUo1Njc4SzNMOCIsImlkIjoiMTJmYjUwZjAtOTk5OC00NTZmLThhZWUtYmI4M2FiMmZiYmRiIiwiaXNBcGFydG1lbnQiOnRydWUsIm5hbWUiOiJBc3BlbiBXb29kcyBBcGFydG1lbnQiLCJvcmdhbml6YXRpb25JZCI6IjM3NDM3ZTE3LWMwZTItNGU5Ny04MTY3LTEyMWI4NTRmZTkwYiJ9LCJpc3MiOiJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNzE3MTc0NTcyNjI1ODcxOTk0NCIsImF1ZCI6WyJkZXYtZGhhbm1hbi1hcGkiLCJodHRwczovL2Rldi1kaGFubWFuLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjEyMDQzNzIsImV4cCI6MTcyMTI5MDc3Miwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF6cCI6IjJhWmJzVUN1U0s1M1hCN3NkT0tUaEYwY0NoVkRYeDI4In0.onwI7q7CgK8un6nBlr9tEHB0k8dok1T-u7jljOsR9aaY-V9i5dbRLFlAdiQxh2q3nIslwPJrjhRRbe8dfTwZzHaAtY12AfaO1GColuMKgtGH2bRn9cNTav6AZubC8fphqv7cRDs-txCPrAJkL4PEN3v1EpMHKB6rlj_4N3SKqcPL92eel4IGAkyEcTU9mCNjCbkDMW7aGx65dFvimVKi3qR4CdbQ6hd-y3XN6m6d4Ur8UG5kqmqIzQx0OPH89kSoQ-56GC1BVIsPI0uHRBbMG-pITKHjQN3tiCzueiBaPG3GvJXD9qd3zVM58hk1rM61Y8c4oopg_BnOOH7fipVPWA`;
    } catch (error) {
      // }
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
