import { NextResponse } from "next/server";
import argon2 from "argon2";
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
      const usersRef = db.collection("Users");
      const snapshot = await usersRef.where("email", "==", email).get();

      if (!snapshot.empty) {
        return NextResponse.json({
          success: "login",
          msg: "You have an account ",
        });
      }
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    const docRef = await db.collection("Users").add({
      fname,
      lname,
      email,
      password: hashedPassword,
    });
    console.log("User added successfully:");

    return NextResponse.json({
      success: "regi",
      msg: "Welcome to Invoice",
    });
  } catch (error) {
    console.error("Error creating user:", error.message); // Log error for debugging
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
