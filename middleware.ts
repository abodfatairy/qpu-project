import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userToken } from "./auth";
export function middleware(req: NextRequest) {
  // @ts-ignore
  const { user, data } = userToken();
  const auth = user ? true : false;

  if (
    auth &&
    data.roles !== "SuperAdmin" &&
    req.url === "https://qpu-project.vercel.app/admin"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!auth && req.url === "https://qpu-project.vercel.app/admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  //
  if (!auth && req.url === "https://qpu-project.vercel.app/products/create") {
    return NextResponse.redirect(new URL("/block", req.url));
  }
  if (
    auth &&
    data.roles == "User" &&
    req.url === "https://qpu-project.vercel.app/products/create"
  ) {
    return NextResponse.redirect(new URL("/block", req.url));
  }
  if (!auth && req.url === "http://localhost:3000/products/create") {
    return NextResponse.redirect(new URL("/block", req.url));
  }
  if (
    auth &&
    data.roles == "User" &&
    req.url === "http://localhost:3000/products/create"
  ) {
    return NextResponse.redirect(new URL("/block", req.url));
  }
  return NextResponse.next();
}
// export const config = {
//   matcher: ["/admin"],
// };
