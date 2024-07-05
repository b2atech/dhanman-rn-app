import apiClient from "../utils/axiosCommunity";

export const getDeliveryCompanies = async () => {
  try {
    const url = `v1/deliveryCompanies`;

    const response = await apiClient.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching delivery companies", error);
    throw error;
  }
};
