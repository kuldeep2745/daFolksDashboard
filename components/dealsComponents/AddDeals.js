"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';

export default function AddTopic() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [amount, setAmount] = useState();
  const [type, setType] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !contact || !amount || !type) {
      alert("Name, Contact and Amount are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, contact, amount, type }),
      });

      if (res.ok) {
        setName("")
        setContact("")
        setAmount("")
        setType("")
        router.refresh();
      } else {
        throw new Error("Failed to create a deal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Button type="submit" className="button" >Add Deal</Button> {" "}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Deal Name"
      />

      <input
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Deal Contact"
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Deal Amount"
      />
      <input
        onChange={(e) => setType(e.target.value)}
        value={type}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Deal Type"
      />
    </form>
  );
}
