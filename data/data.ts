
import { NewUser } from "@/types";
import axios from "axios";

export const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(
      "https://ourstorre.runasp.net/api/Users/Login",
      {
        email,
        password,
      }
    );
    if (res.status !== 200) {
      console.log("error");
    } else {
      return res.data.token;
    }
    // console.log(res.data.token);
  } catch (error) {
    console.log(error, "jkhkjhkjh");
  }
};
export const GetAllUsers = async (token: string) => {
  try {
    const res = await fetch("https://ourstorre.runasp.net/api/Users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};

export const GetAllProducts = async () => {
  try {
    const res = await fetch("https://ourstorre.runasp.net/api/Products", {
      method: "GET",
    });
    if (!res) return;
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};

export const GetRoles = async (token: string) => {
  try {
    const res = await fetch("https://ourstorre.runasp.net/api/Roles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};
export const GetUserRoles = async (token: string, id: string) => {
  try {
    const res = await fetch(
      "https://ourstorre.runasp.net/api/Users/GetUserRoles?userId=fec3c265-672a-434a-afaf-1e4253963540",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};

export const GetUserById = async (token: string, id: number) => {
  // console.log('Token:',token,'ID:',id,);

  try {
    const res = await fetch(
      `https://ourstorre.runasp.net/api/Users/${id}
`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};
export const GetRolesById = async (token: string, id: number) => {
  // console.log('Token:',token,'ID:',id,);

  try {
    const res = await fetch(
      `https://ourstorre.runasp.net/api/Users/GetUserRoles?userId${id}
`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};

export const EditUser = async (token: string, user: any) => {
  try {
    const res = await fetch(`https://ourstorre.runasp.net/api/Users`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: user,
    });
    if (!res) return;
    // console.log(res, "here");

    return res;
  } catch (error) {
    console.log(error, "error");
  }
};
export const CreateProduct = async (token: string, user: any) => {
  try {
    const res = await fetch(`https://ourstorre.runasp.net/api/Products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: user,
    });

    // console.log(res, "here");

    return res;
  } catch (error) {
    console.log(error, "error");
  }
};
export const deleteProduct = async (token: string, id: any) => {
  try {
    const res = await fetch(`https://ourstorre.runasp.net/api/Products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res) return;
    // console.log(res, "here");

    return res;
  } catch (error) {
    console.log(error, "error");
  }
};
export const NewUserData = async (user: NewUser) => {
  // @ts-ignore
  const { name, firstAddress, phoneNumber, password, email } = user;
  // console.log(image, "asd");

  const data = new FormData();
  data.append("name", `${name}`);
  data.append("firstAddress", `${firstAddress}`);
  data.append("phoneNumber", `${phoneNumber}`);
  data.append("password", `${password}`);
  data.append("email", `${email}`);

  try {
    const res = await fetch(`https://ourstorre.runasp.net/api/Users`, {
      method: "POST",
      body: data,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const GetCategoreies = async () => {
  try {
    const res = await axios.get("https://ourstorre.runasp.net/api/Categories");
    if (!res) return;
    return res.data;
  } catch (error) {
    console.log(error, "error");
  }
};
export const GetProductByID = async (id: number) => {
  try {
    const res = await axios.get(
      `https://ourstorre.runasp.net/api/Products/${id}`
    );
    if (!res) return;
    return res.data;
  } catch (error) {
    console.log(error, "error");
  }
};
