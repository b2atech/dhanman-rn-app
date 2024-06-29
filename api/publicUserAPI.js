import axios from "axios";

const api = axios.create({
  baseURL: "https://api-dhanman-common-nonprod.azurewebsites.net",
});

export const generateNewToken = async () => {
  try {
    const endpoint = "get-token";
    const data = {
      phoneNumber: "string",
      otp: "string",
    };
    const fullUrl = `${api.defaults.baseURL}/${endpoint}`;
    console.log("Full URL:", fullUrl);

    const response = await api.post(endpoint, data);
    console.log("Full response:", response.data);
    return response.data.access_token;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
