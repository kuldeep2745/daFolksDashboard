import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function AddTopic(props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deals");

  const router = useRouter();

  useEffect(() => {
    setType(props?.apiType);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, contact, amount, type }),
      });

      if (res.ok) {
        setName("");
        setContact("");
        setAmount("");
        setType("");
        router.refresh();
      } else {
        throw new Error("Failed to create a deal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Button type="submit" className="button">
            Add {props?.apiType}
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
