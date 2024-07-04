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
    createCategory: build.mutation({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body,
      }),
      invalidatesTags: [""],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [""],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/category/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: [""],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
