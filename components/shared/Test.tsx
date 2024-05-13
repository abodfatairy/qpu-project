import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const Test = ({ data }: { data?: string }) => {
  return (
    <>
      {data ? (
        <Dialog>
          <DialogTrigger className="">
            <Image
              src={data!}
              width={100}
              height={100}
              alt=''
            />
          </DialogTrigger>
          <DialogContent>
            <Image
              src={data!}
              width={500}
              height={500}
              alt=''
            />
          </DialogContent>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
};

export default Test;
