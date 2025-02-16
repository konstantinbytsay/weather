import { http, HttpResponse } from "msw";
import { generateFakeCities } from "./cities";

export const handlers = [
  http.get("https://api.example.com/city", () => {
    return HttpResponse.json(generateFakeCities(1000));
  }),
];
