"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, name, contact, amount, type }) {
  const [newName, setNewName] = useState(name);
  const [newContact, setNewContact] = useState(contact);
  const [newAmount, setNewAmount] = useState(amount);
  const [newType, setNewType] = useState(type);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newContact, newAmount, newType}),
      });

      if (!res.ok) {
        throw new Error("Failed to update deal");
      }

      router.refresh();
      router.push("/deals");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewContact(e.target.value)}
        value={newContact}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setNewAmount(e.target.value)}
        value={newAmount}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setNewType(e.target.value)}
        value={newType}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Deal
      </button>
    </form>
  );
}
