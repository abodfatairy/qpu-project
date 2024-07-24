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
import { User } from "@/types";
import { EditUser } from "@/data/data";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"; 
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  name: z.string(),
  image: z.string(),
  phoneNumber: z.string(),
  firstAddress: z.string(),
  firstAddressDescription: z.string(),
  secondAddress: z.string(),
  secondAddressDescription: z.string(),
});
const UserDefValues = {
  name: "",
  image: "",
  firstAddress: "",
  firstAddressDescription: "",
  secondAddress: "",
  secondAddressDescription: "",
  phoneNumber: "",
};
export function SettingForm({
  userData,
  user,
}: {
  userData?: User;
  user?: string;
}) {
  const { toast } = useToast();
  const router = useRouter();
  const userId = userData?.id as string;
  const [files, setFiles] = useState<File[]>([]);
  // console.log(files[0]);

  // const { startUpload } = useUploadThing("imageUploader");
  const initialValues = userData ? userData : UserDefValues;
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  // ...
  async function submit({
    name,
    firstAddress,
    phoneNumber,
    firstAddressDescription,
    secondAddress,
    secondAddressDescription,
    image,
  }: z.infer<typeof formSchema>) {
    const form = new FormData();
    form.append("name", `${name}`);
    form.append("firstAddress", `${firstAddress}`);
    form.append("firstAddressDescription", `${firstAddressDescription}`);
    form.append("secondAddress", `${secondAddress}`);
    form.append("secondAddressDescription", `${secondAddressDescription}`);
    form.append("phoneNumber", `${phoneNumber}`);
    form.append("image", files[0]);
    form.append("userId", `${userId}`);
 

    try {
      // @ts-ignore
      const updateUser = await EditUser(user, form);

      if (updateUser) {
        toast({
          description: "updated successfully",
        });
        router.push(`/`);
        revalidatePath("/");
      } else {
        toast({
          description: "updated successfully",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  //
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className='  dark:text-dark-4 space-y-3 text-slate-400  mb-6'
      >
        <FormField
          control={form.control}
          name='image'
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
          name='name'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:Ahmad'
                  {...field}
                  className=' dark:text-black'
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
              <FormLabel>Phone phoneNumber</FormLabel>
              <FormControl>
                <Input
                  placeholder='0912345678'
                  {...field}
                  className=' dark:text-black'
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
              <FormLabel>firstAddress</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                  className=' dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='firstAddressDescription'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>main Addrse desc</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                  className=' dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='secondAddress'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Second Addrse</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                  className=' dark:text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='secondAddressDescription'
          render={({ field }) => (
            <FormItem className=' '>
              <FormLabel>Second Addrse Desc</FormLabel>
              <FormControl>
                <Input
                  placeholder='example:damas'
                  {...field}
                  className=' dark:text-black'
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
