"use client";
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
