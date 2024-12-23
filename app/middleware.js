import { NextResponse } from "next/server";

export function middleware(request) {
  // Check for the 'token' cookie
  const token = request.cookies.get("token");
  console.log("Token:", token);
  console.log("Middleware is running!");

  // Example: Return a JSON response (not typical in middleware)
  return NextResponse.next();
}

// Configure the matcher
export const config = {
  matcher: "/:path*", // Applies to all routes
};
