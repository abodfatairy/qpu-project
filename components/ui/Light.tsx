import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./Spotlight";

export function SpotlightPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-[40rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-dark-2 antialiased bg-grid-white/[0.02] relative  '>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      {children}
   
    </div>
  );
}
