import { IProductRoutes } from "./product.types";

import { api } from "../api";

export const productService: IProductRoutes = {
  paginated: ({ category }) =>
    api.get(`/products${category ? `/category/${category}` : ""}`),
  getOne: ({ id }) => api.get(`/products/${id}`),
  getByCategory: ({ category }) => api.get(`/products/category/${category}`),
  create: (payload) => api.post("/products", payload),
  update: ({ id, ...payload }) => api.put(`/products/${id}`, payload),
  delete: ({ id }) => api.get(`/products/${id}`),
  getCategories: () => api.get(`/products/categories`),
};
