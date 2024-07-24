"use client";
import { deleteProduct } from "@/data/data";
const DeleteButton = ({ user, item }: { user: any; item: number }) => {
  // console.log(user, item);

  const bz = async () => {
    const deletee = await deleteProduct(user, item);
    return deletee;
    // console.log(user);
    
  };
  return (
    <button
      className=' bg-red-500 p-2 rounded-full md:text-3xl text-white text-center  '
      onClick={bz}
    >
      x
    </button>
  );
};

export default DeleteButton;
