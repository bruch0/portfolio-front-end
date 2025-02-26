export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
  create: (props: Product) => Promise<Product>;
  update: (props: Product) => Promise<Product>;
  delete: (props: OneProduct) => Promise<Product>;
  getCategories: () => Promise<Category[]>;
};
