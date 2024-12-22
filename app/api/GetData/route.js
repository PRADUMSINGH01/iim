import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
export async function GET() {
  try {
    const docRef = await db.collection("Test").add({ testField: "testValue" });
    console.log("Document added with ID:", docRef.id);
    return NextResponse.json({ success: "got " }, { status: 200 });
  } catch (error) {
    console.error("Error adding document:", error.message);
  }
}
