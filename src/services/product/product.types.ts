export type Product = {
  id: number;
  title: string;
  price: string;
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
  category?: string;
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
  create: (
    props: Omit<Product, "rating" | "id">
  ) => Promise<Omit<Product, "rating">>;
  update: (props: Omit<Product, "rating">) => Promise<Product>;
  delete: (props: OneProduct) => Promise<Product>;
  getCategories: () => Promise<Category[]>;
};
