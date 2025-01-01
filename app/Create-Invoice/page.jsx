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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import AddCookies from "@/lib/AddCookies";
function page({ className, ...props }) {
  const [success, setsuccess] = useState("");
  const [items, setitems] = useState([]);
  const inputRef = useRef(null);
  const inputPrice = useRef(null);
  const [price, setprice] = useState([]);
  const [formData, setFormData] = useState({
    LogoUrl: "",
    Business_Name: "",
    Business_Mail: "",
    Business_AddOne: "",
    Business_AddTwo: "",
    Customer_Business_Name: "",
    Customer_Mail: "",
    Customer_AddOne: "",
    Customer_AddTwo: "",

    Invoice_Id: "",
    Invoice_Date: "",
    Invoice_Payment: ["Due", "Done"],
    Invoice_Id: "",
  });
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };
  /**
 * 
 

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

   */
  const deleteItem = (index) => {
    setitems((prevItems) => prevItems.filter((_, i) => i !== index)); // Remove item by index
  };

  const deletePrice = (index) => {
    setprice((deleteitems) =>
      deleteitems.filter((_, i) => {
        if (i !== index) {
          return;
        }
      })
    );
  };

  const addItem = () => {
    const value = inputRef.current.value.trim(); // Get the input value from the ref
    if (value) {
      setitems((prevItems) => [...prevItems, value]); // Add to the state to trigger re-render for the list
      inputRef.current.value = ""; // Clear the input field
    }
  };

  const AddPrice = () => {
    const value = inputPrice.current.value.trim();
    if (value) {
      setprice((prevItems) => [...prevItems, value]);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div>
        <hr />
      </div>
      {success ? (
        <div className="bg-black text-white text-2xl absolute ">{success}</div>
      ) : (
        <></>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center font-[family-name:var(--font-geist-sans)]">
            Add Your Invoice Details Once{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col md:flex-row md:justify-between w-full gap-6">
              <div className="flex flex-col h-full justify-around w-1/2">
                <div className="grid gap-2">
                  <Label htmlFor="email">From----</Label>
                  <Label htmlFor="email">Business Name </Label>
                  <Input
                    id="text"
                    type="text"
                    name="Business_Name"
                    placeholder="Hello.pvt"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Business Email </Label>
                  <Input
                    id="mail"
                    type="mail"
                    name="Business_Mail"
                    placeholder="Hello.pvt@gmail.com"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Address One</Label>
                  </div>
                  <Input
                    id="text"
                    type="text"
                    name="Business_AddOne"
                    placeholder="13/345"
                    value={formData.value}
                    onChange={HandleForm}
                  />
                  <div className="flex items-center">
                    <Label htmlFor="password">Address Two</Label>
                  </div>
                  <Input
                    id="text"
                    type="text"
                    name="Business_AddTwo"
                    placeholder="peter street 312 park"
                    value={formData.value}
                    onChange={HandleForm}
                  />

                  <span className="mt-5 text-xl ">Add Items</span>

                  <Input
                    ref={inputRef} // Attach the ref to the input
                    id="text"
                    type="text"
                    name="item"
                    placeholder="CTR Graphic card"
                    required
                  />
                  <Button onClick={addItem} className="w-20">
                    Add Items{" "}
                  </Button>
                  {items
                    ? items.map((item, index) => (
                        <div className="flex flex-col p-1" key={index}>
                          {item}
                          <Button
                            onClick={() => deleteItem(index)}
                            className="bg-red-300 text-white  hover:bg-red-500"
                          >
                            Delete
                          </Button>
                        </div>
                      ))
                    : "No Items"}
                  <hr className="w-full h-1 bg-black mt-10" />
                  <span className="mt-5 text-xl ">Add Price</span>

                  <Input
                    ref={inputPrice} // Attach the ref to the input
                    id="text"
                    type="number"
                    name="item"
                    placeholder=" Price "
                    required
                  />

                  {price
                    ? price.map((item, index) => (
                        <div className="flex flex-col p-1" key={index}>
                          {item}
                          <Button
                            onClick={() => deletePrice(index)}
                            className="bg-red-300 text-white  hover:bg-red-500"
                          >
                            Delete
                          </Button>
                        </div>
                      ))
                    : "No Items"}
                  <Button onClick={AddPrice} className="w-20">
                    Add Price{" "}
                  </Button>
                </div>

                <hr className="w-full h-1 bg-black mt-10" />

                <div className="grid gap-2 mt-2">
                  <Label htmlFor="email" className="text-xl">
                    {" "}
                    Add Your Tex{" "}
                  </Label>
                  <Input
                    id="tax"
                    type="number"
                    name="Business_Mail"
                    placeholder="GST FAT ... "
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="grid gap-2">
                  <Label htmlFor="email">For----</Label>
                  <Label htmlFor="email">Customer Name </Label>
                  <Input
                    id="text"
                    type="text"
                    name="Customer_Business_Name"
                    placeholder="Hello.pvt"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Customer Email </Label>
                  <Input
                    id="mail"
                    type="mail"
                    name="Customer_Mail"
                    placeholder="Hello@gmail.com"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Address One</Label>
                  </div>
                  <Input
                    id="text"
                    type="text"
                    name="Customer_AddOne"
                    placeholder="13/345"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                  <div className="flex items-center">
                    <Label htmlFor="password">Address Two</Label>
                  </div>
                  <Input
                    id="text"
                    type="text"
                    name="Customer_AddTwo"
                    placeholder="peter street 312 park"
                    required
                    value={formData.value}
                    onChange={HandleForm}
                  />
                </div>
                <Button type="submit" className="w-full mt-5">
                  Create Invoice
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
