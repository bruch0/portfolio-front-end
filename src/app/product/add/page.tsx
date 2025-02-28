/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import { ScrollArea } from "@/components/ScrollArea";
import { Form } from "@/components/Form";

import { useRequest } from "@/hooks";

import { categoryService } from "@/services/categories";
import { productService } from "@/services/product";
import { toast } from "@/components/Toast";

export default function Home() {
  const [getCategories, { data: categories }] = useRequest(
    categoryService.getAll
  );
  const [createProduct, { loading }] = useRequest(productService.create);

  const router = useRouter();

  const schema = z
    .object({
      title: z
        .string()
        .min(5, { message: "Insira um nome de pelo menos 5 caractéres" }),
      price: z
        .string()
        .min(1, { message: "Insira um valor de pelo menos 1 centavo" }),
      description: z
        .string()
        .min(5, { message: "Insira uma descrição de pelo menos 5 caractéres" }),
      category: z.string().min(1, { message: "Escolha uma categoria" }),
      image: z.string().min(1, { message: "Insira uma imagem" }),
    })
    .required();

  const onFormSuccess = () => {
    toast({
      title: "Produto adicionado!",
      variant: "success",
    });
    router.push("/");
  };

  const onFormError = () => {
    toast({
      title: "Ocorreu um erro, tente novamente mais tarde",
      variant: "error",
    });
  };

  const onSubmitForm = (data: z.infer<typeof schema>) => {
    createProduct(data, {
      onSuccess: onFormSuccess,
      onError: onFormError,
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="bg-[#F4F4F5]">
      <Section height="60px" className="flex items-center bg-[#FFFFFF]">
        <Icon name="Aperture" size={40} className="ml-[20px] mr-[20px]" />
        <Typography type="h1">Product Store</Typography>
      </Section>
      <Section className="p-[20px] sm:h-[94vh]">
        <Breadcrumb
          options={[
            { label: "Dashboard", path: "/" },
            { label: "Produtos", path: "/" },
            { label: "Adicionar um produto", path: "/" },
          ]}
        />
        <ScrollArea className="h-[79vh] sm:h-full">
          <Form
            onSubmit={onSubmitForm}
            schema={schema}
            formId="add-product"
            defaultValues={{
              title: "",
              description: "",
              category: "",
              price: "",
              image: "",
            }}
          >
            <div className="sm:flex flex-row justify-between sm:h-[70vh]">
              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col mt-[20px] sm:w-[69%]">
                <Typography type="h2">Adicionar um produto</Typography>
                <Typography type="p" className="mb-[20px]">
                  Insira as informações do novo produto.
                </Typography>
                <Form.Input
                  name="title"
                  label="Nome"
                  placeholder="Nome do produto..."
                  className="mb-[10px]"
                />
                <Form.Currency
                  name="price"
                  label="Preço"
                  placeholder="Valor do produto..."
                  className="mb-[10px]"
                />
                <Form.TextArea
                  name="description"
                  label="Descrição"
                  placeholder="Descrição do produto..."
                  className="h-[100px] mb-[10px] sm:h-[340px]"
                />
              </Section>

              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col mt-[20px] sm:w-[30%]">
                <Typography type="h2">Imagem do produto</Typography>
                <Typography type="p" className="mb-[20px]">
                  Insira uma imagem para o seu produto.
                </Typography>
                <Form.Image name="image" />
              </Section>
            </div>

            <div className="sm:flex flex-row justify-between mt-[20px] sm:m-[0px]">
              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col  sm:w-[69%]">
                <Typography type="h2" className="mb-[20px]">
                  Categoria do produto
                </Typography>
                <Form.Select
                  name="category"
                  options={categories || []}
                  disabled={!!categories}
                />
              </Section>

              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col fixed bottom-0 left-0 w-[100vw] sm:relative sm:w-[30%]">
                <Typography type="h2" className="mb-[20px] sm:flex hidden">
                  Ações
                </Typography>
                <Button
                  icon="PackageCheck"
                  label="Salvar"
                  className="sm:mr-[10px]"
                  type="submit"
                  form="add-product"
                  disabled={loading}
                />
              </Section>
            </div>
          </Form>
        </ScrollArea>
      </Section>
    </div>
  );
}
