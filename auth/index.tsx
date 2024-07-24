import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
export const userToken = () => {
  const user = cookies().get("user")?.value as string;
  if (!user) return false;
  const data = jwtDecode(user);
  if (!data) return false;

  return { user, data };
};

export async function logout() {
  // Destroy the session
  cookies().set("user", "", { expires: new Date(0) });
}
