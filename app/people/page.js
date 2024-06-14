"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
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
// import Button from '@mui/material/Button';
import Button from "../../components/common/button"

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {
  return (
    <div style={{margin:"0px 20px"}}>
      {/* <Button style={{backgroundColor:"grey"}} variant="contained">Add User</Button> */}
      <Button style={{backgroundColor:"grey"}} btn={"Add User"} />
      <br />
      <br />
    <TableContainer className="list-style" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Profile Picture</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Mail</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            {/* <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </StyledTableCell>
              <StyledTableCell align="center">Kuldeep Rathore</StyledTableCell>
              <StyledTableCell align="center">kuldeeprathore@gmail.com</StyledTableCell>
              <StyledTableCell align="center">
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1623175258280-97c63efd370a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </StyledTableCell>
              <StyledTableCell align="center">Medhansh Rathore</StyledTableCell>
              <StyledTableCell align="center">medhanshrathore@gmail.com</StyledTableCell>
              <StyledTableCell align="center">
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1649893241479-aeda9d947429?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </StyledTableCell>
              <StyledTableCell align="center">Shashank Raikwar</StyledTableCell>
              <StyledTableCell align="center">shashankraikwar@gmail.com</StyledTableCell>
              <StyledTableCell align="center">
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </StyledTableCell>
              <StyledTableCell align="center">Shreya Bhaskar</StyledTableCell>
              <StyledTableCell align="center">shreyabhaskar@gmail.com</StyledTableCell>
              <StyledTableCell align="center">
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1580067644090-a03da9d1e360?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </StyledTableCell>
              <StyledTableCell align="center">Arnav Goswami</StyledTableCell>
              <StyledTableCell align="center">Arnav Goswami@gmail.com</StyledTableCell>
              <StyledTableCell align="center">
      <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
            </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count="1"
              rowsPerPage="5"
              page="1"
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              // onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
    </TableContainer>
    </div>
  );
}
