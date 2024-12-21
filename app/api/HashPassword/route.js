import { NextResponse } from "next/server";
import argon2 from "argon2";

export async function POST(req) {
  try {
    const { fname, lname, email, password } = await req.json();
    //const password = "12344";
    console.log(fname, lname, email, password);
    if (!password) {
      return NextResponse.json(
        { success: false, error: "Password is required" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);
    return NextResponse.json({ success: true, hashedPassword });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
