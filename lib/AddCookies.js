"use server";
import { cookies } from "next/headers";

export default async function AddCookies(Token) {
  if (Token) {
    console.log("We have token ");
  } else {
    console.log("no token ");
  }
  const cookieStore = await cookies();
  cookieStore.set({
    name: "token",
    value: Token,
    httpOnly: true,
    path: "/",
  });
  return;
}
