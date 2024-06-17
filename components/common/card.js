"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Count from "./count";
import Button from "./button";

export default function BasicCard(props) {
  const [deals, setDeals] = React.useState("all");
  const [leads, setLeads] = React.useState("all");
  const [organizations, setOrganizations] = React.useState("all");

  const getTopics = async (type) => {
    try {
      const res = await fetch(`/api/topics?type=${type}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

  React.useEffect(() => {
    async function fetchTopics() {
      const data = await getTopics("all");

      setDeals(data.topics.filter((item) => item?.type === "deals").length);
      setLeads(data.topics.filter((item) => item?.type === "leads").length);
      setOrganizations(
        data.topics.filter((item) => item?.type === "organizations").length
      );
    }
    fetchTopics();
  }, []);

  return (
    <Card
      className="card"
      sx={{ minWidth: 245, maxWidth: 100, margin: "1rem" }}
    >
      <CardContent>
        <iframe
          style={{ border: "none", marginLeft: "-45px" }}
          src={props?.lottie}
        ></iframe>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography className="card-head" variant="h5" component="div">
            {props?.head}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Count
              Counter={
                props?.type == "deals"
                  ? deals
                  : props?.type == "leads"
                  ? leads
                  : props?.type == "organizations"
                  ? organizations
                  : "00"
              }
            />
          </Typography>
          <Link
            href={props?.type}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button btn={props?.btnTxt} />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
