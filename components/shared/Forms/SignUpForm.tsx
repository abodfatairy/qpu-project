"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/ui/CustomButton";
import { NewUserData } from "@/data/data";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "name must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  phoneNumber: z.string(),
  email: z.string().email().min(8, {
    message: "email must be at least 2 characters.",
  }),
  firstAddress: z.string().min(8, {
    message: "email must be at least 2 characters.",
  }),
});
export function SignUpForm() {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      firstAddress: "",
      phoneNumber: "",
      password: "",
    },
  });
  // ...
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);

    const newUser = await NewUserData(values);
    if (newUser) {
      toast({
        description: "cheack your email",
      });
    }
    // console.log(newUser);
    if (!newUser) {
      console.log("first");
    }
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
                  className='dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:Ahmad'
                  {...field}
                  className='dark:text-black'
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
                  className='dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder='0912345678'
                  {...field}
                  className='dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='firstAddress'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Addrses</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                  className='dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CustomButton
          title='Sign up'
          className='w-full '
        />
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
