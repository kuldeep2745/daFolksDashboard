"use client"

import React from 'react';
import Deals from "../../components/dealsComponents/deals";

const page = () => {
  return (
    <div>
      <Deals apiType={"organizations"} />
    </div>
  )
}

export default page