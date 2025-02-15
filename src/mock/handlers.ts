import { http, HttpResponse } from "msw";
import { citiesMock } from "./cities";

export const handlers = [
  http.get("/api/cities", () => {
    return HttpResponse.json(citiesMock);
  }),
];
