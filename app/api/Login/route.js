import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
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
  }*/
  return NextResponse.json({
    msg: "You are logged in",
    data: data.email,
  });
}
