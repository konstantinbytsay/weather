import { http, HttpResponse } from "msw";
import { generateFakeCities } from "./cities";

export const handlers = [
  http.get("https://api.example.com/city", async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cities = generateFakeCities(1000);
        resolve(HttpResponse.json(cities));
      }, 5000); // 20 seconds delay
    });
  }),
];
