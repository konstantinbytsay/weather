import { axiosInstance } from "./axiosInstance";

export const searchCity = async () => {
  try {
    const response = await axiosInstance.get("/city");
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
