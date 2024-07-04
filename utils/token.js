import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateNewToken } from "../api/publicUserAPI";

export const getToken = async () => {
  try {
    const token = await generateNewToken();
    await AsyncStorage.setItem("serviceToken", token);
    return token;
  } catch (error) {
    console.error("Error retrieving token", error);
  }
};
