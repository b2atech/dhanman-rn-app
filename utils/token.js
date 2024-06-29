import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateNewToken } from "../api/publicUserAPI";

export const getToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("serviceToken");
    if (!accessToken) {
      const token = await generateNewToken();
      await AsyncStorage.setItem("serviceToken", token);
      return token;
    }
    return accessToken;
  } catch (error) {
    console.error("Error retrieving token", error);
  }
};
