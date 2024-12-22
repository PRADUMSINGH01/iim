"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  const [success, setsuccess] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function Hash() {
    if (formData.password === "") {
      console.log("Please submit password");
    }
    try {
      const res = await fetch("/api/HashPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const data = await res.json();

      if (data.success === "regi") {
        setsuccess(data.msg);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else if (data.success === "login") {
        setsuccess(data.msg);
        setTimeout(() => {
          console.log("login");
          window.location.href = "/login";
        }, 2000);
      } else {
        console.log("Error:");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = "First name is required";
    if (!formData.lname) newErrors.lname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    //console.log("Form Submitted:", formData);
    setErrors({});
  };

  return (
    <div className="w-full max-w-md bg-black mx-auto mb-4 h-auto border border-gray-800 rounded-md shadow-md text-white flex flex-col justify-center items-center p-6 mt-20 font-[family-name:var(--font-geist-sans)]">
      {success ? (
        <div className="absolute bg-black top-0 w-full p-5 text-center  z-10 text-white text-2xl">
          {success}
        </div>
      ) : (
        ""
      )}
      <h1 className="text-4xl text-center mb-6">Register Your Account</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        {/* First Name */}
        <div>
          <Label htmlFor="fname">First Name</Label>
          <Input
            id="fname"
            name="fname"
            type="text"
            placeholder="Enter your first name"
            className="mt-2 p-2 text-white text-lg"
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && (
            <p className="text-red-500 text-sm mt-1">{errors.fname}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <Label htmlFor="lname">Last Name</Label>
          <Input
            id="lname"
            name="lname"
            type="text"
            placeholder="Enter your last name"
            className="mt-2 p-2 text-white text-lg"
            value={formData.lname}
            onChange={handleChange}
          />
          {errors.lname && (
            <p className="text-red-500 text-sm mt-1">{errors.lname}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="mt-2 p-2 text-white text-lg"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="mt-2 p-2 text-white text-lg"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          onClick={Hash}
          className="mt-6 w-full py-2 text-lg"
        >
          Submit
        </Button>
      </form>

      {/* Login Link */}
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Log In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
