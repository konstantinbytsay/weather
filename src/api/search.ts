import { axiosInstance } from "./axiosInstance";

export const searchCity = async (city: string) => {
  try {
    const response = await axiosInstance.get("/city", { params: { city } });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
