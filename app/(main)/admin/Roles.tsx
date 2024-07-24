import { userToken } from "@/auth";
import React from "react";
// @ts-ignore
const { user } = userToken();
const Roles = () => {
  return <div>Roles</div>;
};

export default Roles;
