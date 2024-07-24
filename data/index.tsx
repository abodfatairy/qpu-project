// import { cookies } from "next/headers";

export const getData = async () => {
  try {
    const res = await fetch(`https://jsonserver.reactbd.com/amazonpro`, {
      cache: "no-cache",
    });

    // Check for successful response (status code 200)
    if (!res.ok) {
      throw new Error(`API request failed with status`);
    }

    return await res.json(); // Cast the response to Product[]
  } catch (error) {
    return error; // Return the error object for handling
  } //api/users/
};
export const getRealData = async () => {
  try {
    const res = await fetch(`https://ourstore.runasp.net/api/Products`, {
      cache: "no-cache",
    });

    // Check for successful response (status code 200)
    if (!res.ok) {
      throw new Error(`API request failed with status`);
    }

    return await res.json(); // Cast the response to Product[]
  } catch (error) {
    return error; // Return the error object for handling
  } //api/users/
};
export const getDataById = async (id: string) => {
  try {
    const res = await fetch(`https://jsonserver.reactbd.com/amazonpro/${id}`);

    // Check for successful response (status code 200)
    if (!res.ok) {
      throw new Error(`API request failed with status`);
    }

    return await res.json(); // Cast the response to Product[]
  } catch (error) {
    return error; // Return the error object for handling
  }
};

export const getDataByCategory = async (category: string) => {
  try {
    const uniqueCategories = new Set();
    const res = await fetch(`https://jsonserver.reactbd.com/${category}`);

    if (!res.ok) {
      throw new Error(`API request failed with status`);
    }

    return await res.json(); // Cast the response to Product[]
  } catch (error) {
    return error; // Return the error object for handling
  }
};
