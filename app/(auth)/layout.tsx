import React from "react";

const layout = ({children}:{children:React.ReactNode}) => {
  return <div className=" w-screen h-screen flex items-center justify-center">
    {children}
  </div>;
};

export default layout;
