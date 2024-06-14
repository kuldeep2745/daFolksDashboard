"use client"

import React from 'react';
import Button from '@mui/material/Button';

const button = (props) => {
  return (
    <div>
        <Button className="button" >{props?.btn}</Button>
    </div>
  )
}

export default button