import { ICategoryRoutes } from "./category.types";

import { api } from "../api";

export const categoryService: ICategoryRoutes = {
  getAll: () => api.get("/products/categories"),
};
