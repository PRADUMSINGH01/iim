import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
/*
//import argon2 from "argon2";
import jwt from "jsonwebtoken";
export async function POST(res) {
  const JWT = process.env.JWT;
  const { email, password } = await res.json();
  const usersRef = db.collection("Users");
  const snapshot = await usersRef.where("email", "==", email).get();
  const userDoc = snapshot.docs[0];
  const data = userDoc.data();

  //const isPasswordValid = await argon2.verify(data.password, password);
  console.log(data);
  /*
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

    // Set the cookie in the response
  }
  return NextResponse.json({
    msg: "You are logged in",
    data: data.email,
  });
}
 */

export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON body

    const email = body?.email?.replace(/ /g, ""); // Safe access
    const password = body?.password;

    if (!email || !password) {
      return new NextResponse.json(
        {
          success: false,
          msg: "Email and password are required",
        },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    } else {
      const usersRef = db.collection("Users");
      const snapshot = await usersRef.where("email", "==", email).get();
      const userDoc = snapshot.docs[0];
      const data = userDoc.data();
      console.log(data.email);
      return NextResponse.json({
        success: true,
        msg: "Login successful",
        data: data.email,
      });
    }

    // Perform your login logic here
  } catch (error) {
    console.error("API Login Error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
