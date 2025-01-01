import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let cookie = request.cookies.get("token");
  if (cookie) {
    console.log("veify");
  } else {
    console.log("Not");
  }
  console.log(cookie.value); // => { name: 'nextjs', value: 'fast', Path: '/' }

  return NextResponse.redirect(new URL("/", request.url));
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/Download",
};
