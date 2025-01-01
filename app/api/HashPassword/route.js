import { NextResponse } from "next/server";
import argon2 from "argon2";

export async function POST(req) {
  try {
    const { fname, lname, password, email } = await req.json();
    if (!password) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    } else {
      const hashpassword = await argon2.hash(password, {
        type: argon2.argon2d,
        memoryCost: 2 ** 16,
        hashLength: 50,
      });
      //console.log(hashpassword);
      return NextResponse.json({
        success: true,
        Data: {
          password: hashpassword,
          email: email,
          fname: fname,
          lname: lname,
        },
        msg: "Account Created successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      msg: error,
    });
  }
}
