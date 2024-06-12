"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
const Back = () => {
  const Router = useRouter();
  return <Button className=" w-fit mt-1 ml-1" onClick={() => Router.back()}>Back</Button>;
};

export default Back;
