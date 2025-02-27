type Category = string;

export type ICategoryRoutes = {
  getAll: () => Promise<Category[]>;
};
