import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookies from "cookie";
export async function POST(res) {
  const JWT = process.env.JWT;
  const { email, password } = await res.json();
  const usersRef = db.collection("Users");
  const snapshot = await usersRef.where("email", "==", email).get();
  const userDoc = snapshot.docs[0];
  const data = userDoc.data();
  const isPasswordValid = await argon2.verify(data.password, password);

  if (!isPasswordValid) {
    return NextResponse.json({
      success: false,
      msg: "Invilid Email and Password ...",
    });
  } else {
    // Generate JWT token
    const token = jwt.sign({ id: data.id, email: data.email }, JWT, {
      expiresIn: "7d",
    });
    const res = NextResponse.json({
      success: true,
      msg: "You are logged in",
    });

    // Set the cookie in the response
    res.headers.set(
      "Set-Cookie",
      cookies.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure cookie in production
        maxAge: 3600, // 1 hour expiration
        path: "/", // Available across all routes
        sameSite: "Strict", // CSRF protection
      })
    );
  }
  return NextResponse.json({ success: true, msg: "you are loged in " });
}
