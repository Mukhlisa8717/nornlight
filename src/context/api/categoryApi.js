import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: `/category`,
        method: "GET",
        params,
      }),
      providesTags: [""],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
