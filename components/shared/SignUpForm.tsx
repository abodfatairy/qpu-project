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
import CustomButton from "../ui/CustomButton";

const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "fullname must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  number: z.number().min(10, {
    message: "number must be at least 10 characters.",
  }),
  email: z.string().email().min(8, {
    message: "email must be at least 2 characters.",
  }),
  addrses: z.string().min(8, {
    message: "email must be at least 2 characters.",
  }),
 
});
export function SignUpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      password: "",
      email: "",
      addrses: "",
      number: 0,
    },
  });
  // ...
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='  dark:text-dark-4 space-y-5 text-slate-400 flex-1'
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
          name='addrses'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Addrses</FormLabel>
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

        <CustomButton title='Sign up' className="w-full " />
        {/* <Button
          type='submit'
          className=' mt-2'
        >
          Sign up
        </Button> */}
      </form>
    </Form>
  );
}
