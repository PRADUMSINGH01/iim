import { NextResponse } from "next/server";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export async function POST(res) {
  const JWT_SECRET =
    "d2c67f897fc9f3dbdfcd3eb39d7c89e1fcbf42820b63c7b9f4b1bc6be5d9b1f0";
  try {
    const { password, dbpassword } = await res.json();

    console.log(password, dbpassword);
    // Verify the password
    const isPasswordValid = await argon2.verify(dbpassword, password);

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        msg: "Invalid email or password.",
      });
    }

    // Generate JWT token (avoid including sensitive data like the password)
    const token = jwt.sign({ user: dbpassword }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({
      success: true,
      token,
      msg: "You are logged in.",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({
      success: false,
      msg: "An error occurred during login.",
    });
  }
}
