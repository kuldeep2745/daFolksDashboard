"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function AddTopic() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryType = searchParams.get("type");

  useEffect(() => {
    setType(queryType);
  }, [queryType]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, amount, type }),
      });

      if (res.ok) {
        setName("");
        setContact("");
        setAmount("");
        setType("");
        router.push(`/${type}`);
      } else {
        throw new Error("Failed to create a deal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Button type="submit" className="button">
            Add {type}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            fullWidth
            size="small"
            label="Deal Name"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            fullWidth
            size="small"
            type="number"
            label="Deal Contact"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            fullWidth
            size="small"
            type="number"
            label="Deal Amount"
            variant="outlined"
            required
            inputProps={{
              maxLength: 10,
              minLength: 10,
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
}
