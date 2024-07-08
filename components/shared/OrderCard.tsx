import Image from "next/image";

type OrderCardProps = {
  price: number;
  image: string;
  user: string;
  productName: string;
};
const OrderCard = ({ price, image, user, productName }: OrderCardProps) => {
  return (
    <div className=' flex flex-col gap-3 bg-white w-fit  rounded-md border shadow-md'>
      {/* product image */}
      <div className='w-60 h-40 md:w-[250px] md:h-[160px]  xl:w-[320px] xl:h-[200px]  '>
        <div className=' absolute w-60 h-40 md:w-[250px] md:h-[160px]  xl:w-[320px] xl:h-[200px]  rounded-md '>

          
          <Image
            src={image}
            alt='product image'
            fill
            className=' rounded-md '
          />
        </div>
      </div>
      {/* details */}
      <div className='  '>
        <p className=' text-center capitalize text-main-1 font-semibold tracking-wider'>
          {productName}
        </p>
        <div className=' flex flex-col gap-3 p-5'>
          {/* owner */}
          <div className=' flex justify-between items-center md:text-xl'>
            <p className=' text-slate-400 '>From:</p>
            <h2 className=' text-main-2'>{user}</h2>
          </div>
          {/* price */}
          <div className=' flex justify-between items-center md:text-xl'>
            <p className=' text-slate-400'>price:</p>
            <h2 className=' text-main-2'>
              <span className='text-sm'>$</span>
              {price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
