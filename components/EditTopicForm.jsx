"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Box,
} from '@mui/material';

export default function EditTopicForm({ id, name, contact, amount, type }) {
  const [newName, setNewName] = useState(name);
  const [newContact, setNewContact] = useState(contact);
  const [newAmount, setNewAmount] = useState(amount);
  const [newType, setNewType] = useState(type);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newContact, newAmount, newType }),
      });

      if (!res.ok) {
        throw new Error("Failed to update deal");
      }

      router.refresh();
      router.push("/" + type);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: '600px',
        margin: '0 auto',
        padding: 3,
      }}
    >
      <TextField
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        label="Topic Title"
        variant="outlined"
        fullWidth
      />

      <TextField
        onChange={(e) => setNewContact(e.target.value)}
        value={newContact}
        label="Contact"
        variant="outlined"
        type="number"
        fullWidth
      />
      <TextField
        onChange={(e) => setNewAmount(e.target.value)}
        value={newAmount}
        label="Amount"
        variant="outlined"
        type="number"
        fullWidth
      />
      <TextField
        onChange={(e) => setNewType(e.target.value)}
        value={newType}
        label="Type"
        variant="outlined"
        fullWidth
      />

      <Button
        type="submit"
        className="button"
        sx={{ alignSelf: 'flex-start' }}
      >
        Update Deal
      </Button>
    </Box>
  );
}
