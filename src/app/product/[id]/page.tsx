/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { z } from "zod";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import { ScrollArea } from "@/components/ScrollArea";
import { Form } from "@/components/Form";

import { useRequest } from "@/hooks";

import { productService } from "@/services/product";
import { toast } from "@/components/Toast";
import { SkeletonLoading } from "../SkeletonLoading";
import { Dialog } from "@/components/Dialog";
import { Badge } from "@/components/Badge";

export default function Home() {
  const [getProductDetails, { data: productDetails, loading }] = useRequest(
    productService.getOne
  );
  const [updateProduct, { loading: updateLoading }] = useRequest(
    productService.update
  );
  const [deleteProduct, { loading: deleteLoading }] = useRequest(
    productService.delete
  );

  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();

  const [isEditing, setIsEditing] = useState(false);

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
    })
    .required();

  const onFormSuccess = () => {
    toast({
      title: "Produto atualizado!",
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
    updateProduct(
      { ...data, id: Number(productId), image: "" },
      {
        onSuccess: onFormSuccess,
        onError: onFormError,
      }
    );
  };

  const onDeleteSuccess = () => {
    toast({
      title: "Produto excluido!",
      variant: "success",
    });
    router.push("/");
  };

  const onDeleteError = () => {
    toast({
      title: "Ocorreu um erro, tente novamente mais tarde",
      variant: "error",
    });
  };

  const handleDelete = () => {
    deleteProduct(
      { id: productId },
      {
        onSuccess: onDeleteSuccess,
        onError: onDeleteError,
      }
    );
  };

  useEffect(() => {
    getProductDetails({ id: productId });
  }, [productId]);

  if (loading)
    return (
      <div className="bg-[#F4F4F5]">
        <Section height="60px" className="flex items-center bg-[#FFFFFF]">
          <Icon name="Aperture" size={40} className="ml-[20px] mr-[20px]" />
          <Typography type="h1">Product Store</Typography>
        </Section>
        <SkeletonLoading />
      </div>
    );

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
            { label: "Detalhes do produto", path: "/" },
          ]}
        />
        <ScrollArea className="h-[71vh] sm:h-full">
          <Form
            onSubmit={onSubmitForm}
            schema={schema}
            formId="update-product"
            defaultValues={{
              category: productDetails?.category,
              description: productDetails?.description,
              title: productDetails?.title,
              price: JSON.stringify(productDetails?.price),
            }}
          >
            <div className="sm:flex flex-row justify-between sm:h-[70vh]">
              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col mt-[20px] sm:w-[69%]">
                <Typography type="h2">{productDetails?.title}</Typography>
                <Typography type="p" className="mb-[10px]">
                  Informações do produto
                </Typography>
                {productDetails
                  ? productDetails.rating.rate > 4.5 && (
                      <Badge variant="default" className="w-fit">
                        Destaque
                      </Badge>
                    )
                  : ""}
                <Form.Input
                  name="title"
                  label="Nome"
                  placeholder="Nome do produto..."
                  className="mb-[10px] mt-[20px]"
                  disabled={!isEditing}
                />
                <Form.Currency
                  name="price"
                  label="Preço"
                  placeholder="Valor do produto..."
                  className="mb-[10px]"
                  disabled={!isEditing}
                />
                <Form.TextArea
                  name="description"
                  label="Descrição"
                  placeholder="Descrição do produto..."
                  className="h-[100px] mb-[10px] sm:h-[340px]"
                  disabled={!isEditing}
                />
              </Section>

              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col mt-[20px] sm:w-[30%]">
                <Typography type="h2">Imagem do produto</Typography>
                <Typography type="p" className="mb-[20px]">
                  Insira uma imagem para o seu produto.
                </Typography>
                <Form.Image
                  name="image"
                  defaultImageUrl={productDetails?.image}
                  disabled={!isEditing}
                />
              </Section>
            </div>

            <div className="sm:flex flex-row justify-between mt-[20px] sm:m-[0px]">
              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col sm:w-[34%]">
                <Typography type="h2" className="mb-[20px]">
                  Categoria do produto
                </Typography>
                <Form.Select
                  disabled
                  name="category"
                  options={productDetails ? [productDetails.category] : []}
                />
              </Section>

              <Section className="bg-[#FFFFFF] p-[20px] mt-[20px] flex flex-col sm:w-[34%] sm:mt-[0px]">
                <Typography type="h2" className="mb-[20px]">
                  Avaliação
                </Typography>
                <div className="star-rating">
                  <div className="stars">
                    {Array.from(Array(5).keys()).map((i) => (
                      <Icon
                        name="Star"
                        fill="#FFFFFF"
                        size={40}
                        strokeWidth={1}
                        key={i}
                      />
                    ))}
                  </div>
                  <div className="stars rating">
                    {Array.from(
                      Array(Math.floor(productDetails?.rating.rate || 0)).keys()
                    ).map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        fill="black"
                        size={40}
                        strokeWidth={0}
                      />
                    ))}
                    {Array.from(
                      Array(
                        Math.ceil(
                          (productDetails?.rating.rate || 0) -
                            Math.floor(productDetails?.rating.rate || 0)
                        )
                      )
                    )
                      .keys()
                      .map((i) => (
                        <Icon
                          key={i}
                          name="StarHalf"
                          fill="black"
                          size={40}
                          strokeWidth={0}
                        />
                      ))}
                  </div>
                </div>
              </Section>

              <Section className="bg-[#FFFFFF] p-[20px] flex flex-col fixed bottom-0 left-0 w-[100vw] sm:relative sm:w-[30%]">
                <Typography type="h2" className="mb-[20px] sm:flex hidden">
                  Ações
                </Typography>
                <div className="flex flex-col sm:relative sm:w-[100%] sm:flex-row">
                  <Button
                    icon={isEditing ? "PencilOff" : "Pencil"}
                    label={isEditing ? "Parar" : "Editar"}
                    className="sm:mr-[10px] sm:w-[49%]"
                    onClick={() => setIsEditing(!isEditing)}
                    variant="secondary"
                    type="button"
                    disabled={updateLoading || deleteLoading}
                  />
                  {isEditing && (
                    <Button
                      icon="Save"
                      variant="default"
                      label="Salvar"
                      className="sm:mr-[10px] mt-[10px] sm:mt-[0px] sm:w-[49%]"
                      type="submit"
                      disabled={updateLoading}
                    />
                  )}
                  <Dialog
                    trigger={
                      isEditing ? (
                        <div></div>
                      ) : (
                        <Button
                          icon="Trash"
                          variant="destructive"
                          label="Deletar"
                          className="sm:mr-[10px] mt-[10px] sm:mt-[0px] sm:w-[49%]"
                          type="button"
                          disabled={deleteLoading}
                        />
                      )
                    }
                    title="Confirmar exclusão"
                    description="Ao confirmar, esse produto será excluído para sempre"
                    cancelText={"Cancelar"}
                    confirmText={"Confirmar"}
                    confirmFunction={handleDelete}
                  />
                </div>
              </Section>
            </div>
          </Form>
        </ScrollArea>
      </Section>
    </div>
  );
}
