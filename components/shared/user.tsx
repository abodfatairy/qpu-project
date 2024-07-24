"use client";

import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user, "use");
  }, []);

  return <div>user</div>;
};

export default User;
