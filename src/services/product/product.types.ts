export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Category = string;

type PaginatedProducts = {
  limit?: string;
  sort?: "asc" | "desc";
};

type OneProduct = {
  id: string;
};

type ProductsByCategory = {
  category: string;
};

export type IProductRoutes = {
  paginated: (props: PaginatedProducts) => Promise<Product[]>;
  getOne: (props: OneProduct) => Promise<Product>;
  getByCategory: (props: ProductsByCategory) => Promise<Product[]>;
  create: (props: Omit<Product, "rating">) => Promise<Omit<Product, "rating">>;
  update: (props: Omit<Product, "rating">) => Promise<Product>;
  delete: (props: OneProduct) => Promise<Product>;
  getCategories: () => Promise<Category[]>;
};
