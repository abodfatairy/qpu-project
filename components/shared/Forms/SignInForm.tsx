"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/ui/CustomButton";
import { Login } from "@/data/data";
import { useRouter, redirect } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
export function SignInForm() {
  const [forget, setForget] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // ...
  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    const isLoged = await Login({ email, password });
    // console.log(isLoged, "heres");

    isLoged && setCookie("user", isLoged);
    const user = getCookie("user");

    if (user) {
      router.push("/");
      toast({
        description: "welcome ",
      });
    }
    if (!user) {
      setForget(true);
      toast({
        description: "email or the password is wrong",
        variant: "destructive",
      });
    }

    // console.log(email);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8  '
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className=' '>
              <FormControl>
                <Input
                  className=' '
                  placeholder='example@example.com'
                  {...field}
                  autoComplete=''
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
        <CustomButton
          title='Sign in'
          className='w-full'
          type='submit'
        />
      </form>
      {forget ? (
        <Link
          href={"/reset-password"}
          className=' text-white flex items-center justify-center mt-5'
        >
          Forget Password?
        </Link>
      ) : (
        ""
      )}
    </Form>
  );
}
