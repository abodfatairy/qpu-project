"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUploader } from "../FileUploader";
import { useState } from "react";
import { categories, Products, ProductsProps } from "@/types";
import { CreateProduct } from "@/data/data";
import { CategorySelcet } from "../CategorySelect";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "product Name must be at least 3 characters.",
  }),
  image1: z.string(),
  image2: z.string(),
  image3: z.string(),
  image4: z.string(),
  brand: z.string(),
  price: z.string(),
  discount: z.string(),
  categoryId: z.string(),
  description: z.string(),
});
const productDefaultValues = {
  name: "",
  brand: "",
  price: "",
  discount: "",
  categoryId: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  description: "",
};

type ProductFormProps = {
  type: "Create" | "Update";
  product?: Products;
  userid?: number;
  token?: string;
  Categories?: categories[];
};
export function ProductForm({
  type,
  product,
  userid,
  token,
  Categories,
}: ProductFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [image1, setimage1] = useState<File[]>([]);
  const [image2, setimage2] = useState<File[]>([]);
  const [image3, setimage3] = useState<File[]>([]);
  const [image4, setimage4] = useState<File[]>([]);
  const initialValues = type === "Update" ? product : productDefaultValues;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues: initialValues,
  });
  // ...
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const formData = new FormData();
    if (type === "Create") {
      formData.append("Name", values.name);
      formData.append("Description", values.description);
      formData.append("Image1", image1[0]);
      formData.append("Image2", image2[0]);
      formData.append("Image3", image3[0]);
      formData.append("Image4", image4[0]);
      //@ts-ignore
      formData.append("price", values.price);
      formData.append("categoryId", values.categoryId);
      // @ts-ignore
      formData.append("userid", userid);
      formData.append("Brand", values.brand);
      formData.append("discount", values.discount);
    }

    // @ts-ignore
    const created = await CreateProduct(token, formData);
    if (created) {
      router.push("/products");
      // revalidatePath("/products");
    }
    if (!created) {
      toast({
        description: "somthing went wrong",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='  dark:text-dark-4 space-y-3 text-slate-400   mb-6'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className=' placeholder:text-slate-300 text-black'
                  placeholder=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-around items-center p-5  flex-col md:flex-row'>
          <FormField
            control={form.control}
            name='image1'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setimage1}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='image2'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setimage2}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='image3'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setimage3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='image4'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setimage4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  className=' placeholder:text-slate-300 text-black'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  className=' placeholder:text-slate-300 text-black'
                  placeholder='000'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='brand'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>brand</FormLabel>
              <FormControl>
                <Input
                  className=' placeholder:text-slate-300 text-black'
                  placeholder='apple'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='discount'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Previous Price</FormLabel>
              <FormControl>
                <Input
                  className=' placeholder:text-slate-300 text-black'
                  placeholder='666'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='categoryId'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>categoryName</FormLabel>
              <FormControl>
                <CategorySelcet
                  onChangeHandler={field.onChange}
                  value={field.value}
                  // @ts-ignore
                  Categories={Categories}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className=' mt-2'
        >
          Edit
        </Button>
      </form>
    </Form>
  );
}
