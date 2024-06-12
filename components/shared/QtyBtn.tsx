import React from "react";

// import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";
import { IoTrashOutline } from "react-icons/io5";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center items-center w-40'>
      <Button
        className='w-12 h-10  bg-red-600'
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? <IoTrashOutline /> : "-"}
      </Button>
      <p className=" text-blue-800">{props.qty}</p>
      <Button
        className='w-12 h-10 bg-main-1'
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
