"use client";

import React from 'react';
import CountUp from 'react-countup';

const count = (props) => {
  return (
    <>
<CountUp duration={4.75} className="counter-style" end={props?.Counter} />
    </>
  )
}

export default count