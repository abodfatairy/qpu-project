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
// import { UploadButton } from "@/lib/uploadthing";
// import { UploadDropzone } from "@uploadthing/react";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import { convertFileToUrl } from "@/lib/utils";

const formSchema = z.object({
  productName: z.string().min(3, {
    message: "product Name must be at least 3 characters.",
  }),
  productImg: z.string(),
  productImg2: z.string(),
  productImg3: z.string(),
  productImg4: z.string(),
  brand: z.string(),
  price: z.string(),
  previousPrice: z.string(),
  category: z.string(),
  description: z.string(),
});
export function ProductForm() {
  const [files, setFiles] = useState<File[]>([]);
  


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      brand: "",
      price: "",
      previousPrice: "",
      category: "",
      productImg: "",
      productImg2: "",
      productImg3: "",
      productImg4: "",
      description: "",
    },
  });
  // ...
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='  dark:text-dark-4 space-y-3 text-slate-400   mb-6'
      >
        <FormField
          control={form.control}
          name='productName'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
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
            name='productImg'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='productImg2'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='productImg3'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='productImg4'
            render={({ field }) => (
              <FormItem className=' w-fit '>
                <FormLabel>Other Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
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
                <Input {...field} />
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
                  placeholder='0912345678'
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
                  placeholder='example:damas'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='previousPrice'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Previous Price</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
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
