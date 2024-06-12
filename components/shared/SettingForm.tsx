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

const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "fullname must be at least 3 characters.",
  }),
  profilePhoto: z.string(),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  number: z.string(),
  email: z.string().email().min(8, {
    // message: "email must be at least 2 characters.",
  }),
  mainAddrse: z.string().min(8, {
    // message: "email must be at least 2 characters."
  }),
  mainAddrseDesc: z.string().min(8, {
    // message: "email must be at least 2 characters.",
  }),
  secAddrse: z.string().min(8, {
    // message: "email must be at least 2 characters.",
  }),
  secAddrseDesc: z.string().min(8, {
    // message: "email must be at least 2 characters.",
  }),
});
export function SettingForm() {
  const [files, setFiles] = useState<File[]>([]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      password: "",
      email: "",
      mainAddrse: "",
      mainAddrseDesc: "",
      secAddrse: "",
      secAddrseDesc: "",
      profilePhoto: "",
      number: "",
    },
  });
  // ...
  function onSubmit(values: z.infer<typeof formSchema>) {

  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='  dark:text-dark-4 space-y-3 text-slate-400  mb-6'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='example@example.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='profilePhoto'
          render={({ field }) => (
            <FormItem className=' w-fit '>
              <FormLabel>Profile Image</FormLabel>
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
          name='fullname'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:Ahmad'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='*********'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='number'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Phone Number</FormLabel>
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
          name='mainAddrse'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>mainAddrse</FormLabel>
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
          name='mainAddrseDesc'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>main Addrse desc</FormLabel>
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
          name='secAddrse'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Second Addrse</FormLabel>
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
          name='secAddrseDesc'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Second Addrse Desc</FormLabel>
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
