import { NextResponse } from "next/server";
import argon2 from "argon2";
//import { DATABASE } from "@/lib/data";
import { db } from "@/lib/firebase";

export async function POST(req) {
  try {
    const { fname, lname, email, password } = await req.json();
    if (!password || !fname || !lname || !email) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    } else {
      console.log("error");
      console.log("User added successfully:");
      const docRef = await db.collection("Users").add({
        fname,
        lname,
        password,
        email,
      });
    }
  } catch (error) {
    console.error("Error creating user:", error.message); // Log error for debugging
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
  return NextResponse.json({
    msg: "error",
  });
}
