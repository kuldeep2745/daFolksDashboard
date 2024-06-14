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
      <Button style={{backgroundColor:"grey"}} btn={"Add Lead"} />
      <br />
      <br />
    <TableContainer className="list-style" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Lead Name</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Lead Source</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            {/* <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Lead 1
              </StyledTableCell>
              <StyledTableCell align="center">99999999999</StyledTableCell>
              <StyledTableCell align="center">xyz</StyledTableCell>
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
              Lead 1
              </StyledTableCell>
              <StyledTableCell align="center">99999999999</StyledTableCell>
              <StyledTableCell align="center">xyz</StyledTableCell>
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
              Lead 1
              </StyledTableCell>
              <StyledTableCell align="center">99999999999</StyledTableCell>
              <StyledTableCell align="center">xyz</StyledTableCell>
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
              Lead 1
              </StyledTableCell>
              <StyledTableCell align="center">99999999999</StyledTableCell>
              <StyledTableCell align="center">xyz</StyledTableCell>
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
              Lead 1
              </StyledTableCell>
              <StyledTableCell align="center">99999999999</StyledTableCell>
              <StyledTableCell align="center">xyz</StyledTableCell>
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
