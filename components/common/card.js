"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Count from "./count";
import Button from "./button"

export default function BasicCard(props) {

  return (
    <Card className="card" sx={{ minWidth: 275, maxWidth: 100, margin: '1rem' }}>
      <CardContent>
      <iframe style={{border:"none", marginLeft:"-25px"}} src={props?.lottie}></iframe>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography className="card-head" variant="h5" component="div">
            {props?.head}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Count Counter={props?.count}/>
          </Typography>
          <Link href={props?.btnTxt} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button btn={props?.btnTxt}/>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
