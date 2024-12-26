import { NextResponse } from "next/server";
//import clientPromise from "@/lib/mongodb";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
export async function POST(res) {
  const JWT = process.env.JWT;
  const { password } = await res.json();

  try {
    const isPasswordValid = await argon2.verify(data.password, password);
    console.log(data);

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

      return NextResponse.json({
        success: true,
        token: token,
        msg: "You are logged in",
      });
    }
  } catch (error) {
    // Set the cookie in the response
  }
  return NextResponse.json({
    msg: "You are logged in",
    data: data.email,
  });
}
