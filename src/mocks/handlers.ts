import { http, HttpResponse } from 'msw'
import { title } from 'process'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://api.tvmaze.com/shows/82/episodes', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([{
      name: "Winter is Coming"
    }])
  }),
]