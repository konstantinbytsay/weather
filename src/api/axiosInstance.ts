import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Base URL for all requests
  timeout: 10000, // Timeout for requests (e.g., 10 seconds)
  headers: {
    "Content-Type": "application/json", // Specifies that the request body is in JSON format
    Accept: "application/json", // Specifies that the response should be in JSON format
    Connection: "keep-alive", // Specifies that the connection should remain open
  },
});
