"use client";
import { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page({ className, ...props }) {
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
    items: [],
    price: [],
    Invoice_Id: "",
    Invoice_Date: "",
    Invoice_Payment: "Due",
    invoice_Id: "",
    Custo_Info: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const inputRef = useRef(null);
  const priceRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addItem = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setFormData((prev) => ({
        ...prev,
        items: [...prev.items, value],
      }));
      inputRef.current.value = ""; // Clear input field
    }
  };

  const addPrice = () => {
    const value = priceRef.current.value.trim();
    if (value) {
      setFormData((prev) => ({
        ...prev,
        price: [...prev.price, value],
      }));
      priceRef.current.value = ""; // Clear input field
    }
  };

  const deleteItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const deletePrice = (index) => {
    setFormData((prev) => ({
      ...prev,
      price: prev.price.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Invoice"), formData);
      setSuccessMessage("Invoice created successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {successMessage && (
        <div className="bg-black text-white text-2xl absolute">
          {successMessage}
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Add Your Invoice Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Business Section */}
              <div className="flex flex-col gap-4 w-1/2">
                <Label>Business Name</Label>
                <Input
                  type="text"
                  name="Business_Name"
                  placeholder="Business Name"
                  value={formData.Business_Name}
                  onChange={handleInputChange}
                />
                <Label>Business Email</Label>
                <Input
                  type="email"
                  name="Business_Mail"
                  placeholder="Business Email"
                  value={formData.Business_Mail}
                  onChange={handleInputChange}
                />
                <Label>Invoice Number</Label>
                <Input
                  type="text"
                  name="invoice_Id"
                  placeholder="Invoice Id"
                  value={formData.invoice_Id}
                  onChange={handleInputChange}
                />

                {/* Items */}
                <Label>Add Items</Label>
                <Input ref={inputRef} type="text" placeholder="Add Item" />
                <Button type="button" onClick={addItem}>
                  Add Item
                </Button>
                <ul>
                  {formData.items.map((item, index) => (
                    <li key={index}>
                      {item}{" "}
                      <Button
                        type="button"
                        onClick={() => deleteItem(index)}
                        className="text-red-500"
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Customer Section */}
              <div className="flex flex-col gap-4 w-1/2">
                <Label>Customer Name</Label>
                <Input
                  type="text"
                  name="Customer_Business_Name"
                  placeholder="Customer Name"
                  value={formData.Customer_Business_Name}
                  onChange={handleInputChange}
                />

                <Label>Customer Email</Label>
                <Input
                  type="email"
                  name="Customer_Mail"
                  placeholder="Customer Email"
                  value={formData.Customer_Mail}
                  onChange={handleInputChange}
                />
                <Label> Customer Info</Label>
                <textarea
                  type="textarea"
                  name="Custo_Info"
                  placeholder="Invoice Id"
                  value={formData.Custo_Info}
                  onChange={handleInputChange}
                ></textarea>

                {/* Price */}
                <Label>Add Price</Label>
                <Input ref={priceRef} type="number" placeholder="Add Price" />
                <Button type="button" onClick={addPrice}>
                  Add Price
                </Button>
                <ul>
                  {formData.price.map((price, index) => (
                    <li key={index}>
                      {price}{" "}
                      <Button
                        type="button"
                        onClick={() => deletePrice(index)}
                        className="text-red-500"
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button type="submit" className="mt-6">
              Create Invoice
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
