import Back from "@/components/shared/Back";
import OrderCard from "@/components/shared/OrderCard";
import React from "react";

const OrdersPage = () => {
  return (
    <div className=' flex flex-col gap-2'>
      <div className=''>
        <Back />
      </div>
      {/* main */}
      <div className='  flex flex-col gap-2 items-center  '>
        <h1 className='  font-medium text-3xl text-main-1 flex mb-2'>
          My orders
        </h1>
        <div className='container grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 ml-12 md:ml-auto'>
          <OrderCard
            image='/assets/images/1.jpg'
            price={500}
            productName='bz alklb'
            user='nour fuck you'
          />
          <OrderCard
            image='/assets/images/1.jpg'
            price={500}
            productName='bz alklb'
            user='nour fuck you'
          />
          <OrderCard
            image='/assets/images/1.jpg'
            price={500}
            productName='bz alklb'
            user='nour fuck you'
          />
          <OrderCard
            image='/assets/images/1.jpg'
            price={500}
            productName='bz alklb'
            user='nour fuck you'
          />
          <OrderCard
            image='/assets/images/1.jpg'
            price={500}
            productName='bz alklb'
            user='nour fuck you'
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
