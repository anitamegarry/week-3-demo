// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

function wait(miliseconds: number) {
  const later = Date.now() + miliseconds;
  while (Date.now() < later) {}
}

export const handlers = [
  // Intercept GET "https://api.tvmaze.com/shows/82/episodes" requests...

  http.get("https://api.tvmaze.com/shows/1/episodes", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        name: "Pilot for Under the Dome",
      },
    ]);
  }),
  http.get("https://api.tvmaze.com/shows/2/episodes", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        name: "Pilot for the Dexter show",
      },
      {
        id: "2",
        name: "Dexter goes to Hollywood",
      },
    ]);
  }),
  http.get("https://api.tvmaze.com/shows", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Under the Dome",
      },
      {
        id: 2,
        name: "Dexter",
      },
    ]);
  }),
];
