import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LineUpPerformance } from "../types/performance";

export const performanceApi = createApi({
  reducerPath: "performance",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/`,
    prepareHeaders: (headers, {}) => {
      const token = import.meta.env.VITE_LINE_UP_TOKEN;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPerformanceById: builder.query<{ data: LineUpPerformance }, string>({
      query: (id) => `performance/${id}`,
    }),
  }),
});

export const { useGetPerformanceByIdQuery } = performanceApi;
