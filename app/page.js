import React from 'react';
import Grid from '@mui/material/Grid';
import BasicCard from '../components/common/card';
import List from "../components/common/list";


const Page = () => {
  return (
    <>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={3}>
        <BasicCard type={"deals"} head={"Total Deals"} count={100} btnTxt={"view deals"} lottie={"https://lottie.host/embed/5fa7e277-eb9c-4f2a-bdd6-3a4d8ec203d7/TlovlXbFVq.json"}/>
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={3}>
        <BasicCard type={"leads"} head={"Total Leads"} count={200} btnTxt={"view leads"} lottie={"https://lottie.host/embed/b2761b98-3e0b-49f0-a983-ef1203c7707b/66eFGa6Q0J.json"} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={3}>
        <BasicCard head={"Total People"} count={300} btnTxt={"view people"} lottie={"https://lottie.host/embed/33ce8be8-7a46-4e5a-86eb-c321b2260be7/QoAxJ1Tpcy.json"} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={3}>
        <BasicCard type={"organizations"} head={"Total Organization"} count={400} btnTxt={"view organizations"} lottie={"https://lottie.host/embed/ca533667-544d-4825-ba84-cac98cd8064e/b09CAuirYH.json"}/>
      </Grid>
    </Grid>
    <br />
    <h2 style={{margin:"0px 20px"}}>People List</h2>
    <List />
    </>
  );
}

export default Page;
