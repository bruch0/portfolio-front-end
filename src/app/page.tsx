/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Table } from "@/components/Table";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import { Dropdown } from "@/components/Dropdown";

import { useRequest } from "@/hooks";

import { productService } from "@/services/product";
import { categoryService } from "@/services/categories";
import { Skeleton } from "@/components/Skeleton";

export default function Home() {
  const [getProducts, { data: products, updateData, loading }] = useRequest(
    productService.paginated
  );
  const [getCategories, { data: categories }] = useRequest(
    categoryService.getAll
  );

  const router = useRouter();

  const [priceOrdering, setPriceOrdering] = useState<
    "asc" | "desc" | "standard"
  >("standard");

  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const handleCategory = (newCategory: string) => {
    if (categoryFilter === newCategory) return setCategoryFilter("");

    setCategoryFilter(newCategory);
  };

  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const PAGE_SIZE = isMobile ? 5 : 10;

  const handlePagination = (step: number) => setPage(page + step);

  const paginatedProducts = products
    ? products.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1))
    : [];

  const orderProducts = (order: "asc" | "desc" | "standard") => {
    if (!products) return;

    switch (order) {
      case "standard":
        updateData(products.sort((a, b) => (a.price > b.price ? -1 : 1)));
        return setPriceOrdering("asc");

      case "asc":
        updateData(products.sort((a, b) => (a.price < b.price ? -1 : 1)));
        return setPriceOrdering("desc");

      case "desc":
        updateData(products.sort((a, b) => (a.id < b.id ? -1 : 1)));
        return setPriceOrdering("standard");
    }
  };

  useEffect(() => {
    function handleResize() {
      const pageWidth = window.innerWidth;
      const isMobileScreen = pageWidth < 640;

      if (isMobileScreen !== isMobile) {
        setIsMobile(isMobileScreen);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getProducts({ category: categoryFilter });
  }, [categoryFilter]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="bg-[#F4F4F5]">
      <Section height="60px" className="flex items-center bg-[#FFFFFF]">
        <Icon name="Aperture" size={40} className="ml-[20px] mr-[20px]" />
        <Typography type="h1">Product Store</Typography>
      </Section>
      <Section className="p-[20px]">
        <Breadcrumb
          options={[
            { label: "Dashboard", path: "/" },
            { label: "Produtos", path: "/" },
          ]}
        />

        <Section
          width="100%"
          className="bg-[#FFFFFF] p-[20px] h-[83vh] sm:h-[85.5vh] flex flex-col justify-between mt-[20px]"
        >
          <div>
            <div className="flex justify-between mb-[20px]">
              <div>
                <Typography type="h1">Produtos</Typography>
                <Typography type="p">Gerencie seus produtos.</Typography>
              </div>
              <div className="flex flex-col  sm:flex-row">
                <Button
                  icon="Plus"
                  label="Adicionar"
                  className="sm:mr-[10px]"
                  onClick={() => router.push("/product/add")}
                />
                <Button
                  icon={
                    priceOrdering === "standard"
                      ? "ListOrdered"
                      : priceOrdering === "asc"
                      ? "ArrowBigUpDash"
                      : "ArrowBigDownDash"
                  }
                  label={
                    priceOrdering === "standard"
                      ? "Ordenar"
                      : priceOrdering === "asc"
                      ? "Maiores preços"
                      : "Menores preços"
                  }
                  className="sm:mr-[10px] mt-[10px] sm:mt-[0px]"
                  onClick={() => orderProducts(priceOrdering)}
                />

                <Dropdown
                  triggerProps={{
                    icon: "ListFilter",
                    label: categoryFilter || "Filtrar",
                    className: "mt-[10px] sm:mt-[0px]",
                  }}
                  options={
                    categories
                      ? categories.map((category) => ({
                          label: category,
                          onClick: () => handleCategory(category),
                        }))
                      : []
                  }
                  dropdownTitle="Categorias"
                />
              </div>
            </div>

            <div className="h-[100%] sm:h-[auto]">
              {products && !loading ? (
                <Table
                  headers={["", "Nome", "Preço", "Avaliação", "Categoria"]}
                  rows={paginatedProducts.map((product) => ({
                    ...product,
                    rating: product.rating.rate,
                    name: product.title,
                    image: {
                      url: product.image,
                      height: isMobile ? 0 : 48,
                      width: isMobile ? 0 : 48,
                    },
                    onClick: () => router.push(`/product/${product.id}`),
                  }))}
                />
              ) : (
                <Skeleton className="h-[55vh] sm:h-[66vh]" />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Typography type="p">
              Mostrando {page * PAGE_SIZE + 1} -{" "}
              {products?.length &&
                Math.min((page + 1) * PAGE_SIZE, products.length)}{" "}
              resultados
            </Typography>
            <div className="flex">
              <Button
                size="icon"
                variant="ghost"
                icon="ChevronLeft"
                onClick={() => handlePagination(-1)}
                disabled={page === 0}
              />
              <Button
                size="icon"
                variant="ghost"
                icon="ChevronRight"
                className="ml-[10px]"
                onClick={() => handlePagination(1)}
                disabled={
                  products?.length
                    ? (page + 1) * PAGE_SIZE >= products?.length
                    : true
                }
              />
            </div>
          </div>
        </Section>
      </Section>
    </div>
  );
}
