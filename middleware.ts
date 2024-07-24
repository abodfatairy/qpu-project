import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userToken } from "./auth";
export function middleware(req: NextRequest) {
  // @ts-ignore
  const { user, data } = userToken();
  const auth = user ? true : false;
//   console.log(data.roles, "dara");
  if (auth && data.roles == "SuperAdmin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", req.url));
}
export const config = {
  matcher: ["/admin"],
};
