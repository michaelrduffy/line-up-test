import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const performanceApi = createApi({
  reducerPath: "performance",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/`,
    prepareHeaders: (headers, { getState }) => {
      const token = import.meta.env.VITE_LINE_UP_TOKEN;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPerformanceById: builder.query<unknown, string>({
      query: (id) => `performance/${id}`,
    }),
  }),
});

export const { useGetPerformanceByIdQuery } = performanceApi;
