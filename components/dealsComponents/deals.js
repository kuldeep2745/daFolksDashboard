
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from "../../components/common/button";
import AddDeals from "./AddDeals";
import RemoveDeals from "./RemoveBtn";
import Link from 'next/link';
// import EditDeals from "./EditDeals"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
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
  

export default async function CustomizedTables() {
    const { topics } = await getTopics();
  return (
    <div style={{margin:"0px 20px"}}>
        <AddDeals />
        {/* <EditDeals /> */}
      {/* <Button style={{backgroundColor:"grey"}} variant="contained">Add User</Button> */}
      {/* <Button style={{backgroundColor:"grey"}} btn={"Add Deal"} /> */}
      <br />
      <br />
    <TableContainer className="list-style" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Deal Name</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            {/* <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {topics.map((item, index) => (
            <StyledTableRow key={index} >
              <StyledTableCell component="th" scope="row">
                {item?.name}
              </StyledTableCell>
              <StyledTableCell align="center">{item?.contact}</StyledTableCell>
              <StyledTableCell align="center">{item?.amount}</StyledTableCell>
              <StyledTableCell align="center">
              <Link href={`/editTopic/${item?._id}`}>
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
              </Link>
      <RemoveDeals id={item._id}/>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
