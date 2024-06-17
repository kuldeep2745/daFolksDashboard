"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../../components/common/button";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CustomizedTables() {
  return (
    <div style={{ margin: "0px 20px" }}>
      <Button style={{ backgroundColor: "grey" }} btn={"Add User"} />
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
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </StyledTableCell>
              <StyledTableCell align="center">Kuldeep Rathore</StyledTableCell>
              <StyledTableCell align="center">
                kuldeeprathore@gmail.com
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1623175258280-97c63efd370a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </StyledTableCell>
              <StyledTableCell align="center">Medhansh Rathore</StyledTableCell>
              <StyledTableCell align="center">
                medhanshrathore@gmail.com
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1649893241479-aeda9d947429?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </StyledTableCell>
              <StyledTableCell align="center">Shashank Raikwar</StyledTableCell>
              <StyledTableCell align="center">
                shashankraikwar@gmail.com
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </StyledTableCell>
              <StyledTableCell align="center">Shreya Bhaskar</StyledTableCell>
              <StyledTableCell align="center">
                shreyabhaskar@gmail.com
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1580067644090-a03da9d1e360?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </StyledTableCell>
              <StyledTableCell align="center">Arnav Goswami</StyledTableCell>
              <StyledTableCell align="center">
                Arnav Goswami@gmail.com
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
