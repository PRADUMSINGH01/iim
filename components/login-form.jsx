"use client";
//import argon2 from "argon2";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn, signOut, useSession } from 'next-auth/react'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import AddCookies from "@/lib/AddCookies";
export function LoginForm({ className, ...props }) {
  const { data: session } = useSession();




useEffect(()=>{

function sessiondata(){
  if(!session){
    return window.location.href = '/'
  }
}
sessiondata()


},[])


  const [success, setsuccess] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };




  const Verification = async () => {
    const usersRef = collection(db, "Users"); // Replace 'users' with your collection name
    const q = query(usersRef, where("email", "==", formData.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("User Not exists with this email.");
      return "User Not exists";
    } else {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      const shouldPasswordVerify = await results[0].password;
      const res = await fetch("/api/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dbpassword: shouldPasswordVerify,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (data.token) {
        setsuccess(data.msg);
        console.log("data " + data.token);

        AddCookies(data.token);
      } else {
        setsuccess(data.msg);
      }
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {success ? (
        <div className="bg-black text-white text-2xl absolute ">{success}</div>
      ) : (
        <></>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={Verification}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  value={formData.value}
                  onChange={HandleForm}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.value}
                  onChange={HandleForm}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button
                variant="outline"
                className="w-full text-white bg-pink-500"
                onClick={() => signIn('github')}
              >
                Login with Github
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/SignUp" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
