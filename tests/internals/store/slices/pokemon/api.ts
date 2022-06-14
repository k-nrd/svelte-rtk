import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`
    })
  })
});

export const { getPokemonByName } = pokemonApi.endpoints;
