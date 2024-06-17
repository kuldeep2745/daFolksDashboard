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
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

export default function CustomizedTables(props) {
  const router = useRouter();
  const [topics, setTopics] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isClient, setIsClient] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);

  const fetchTopics = async () => {
    const data = await getTopics(props?.apiType);
    setTopics(data.topics || []);
  };

  React.useEffect(() => {
    fetchTopics();
  }, [props?.apiType, refresh]);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNavigation = () => {
    if (isClient) {
      const query = new URLSearchParams({ type: props?.apiType }).toString();
      router.push(`/addTopic?${query}`);
    }
  };

  const removeTopic = async (id) => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRefresh(!refresh);
      }
    }
  };

  return (
    <div style={{ margin: "0px 20px" }}>
      <Button onClick={handleNavigation} type="submit" className="button">
        Add {props?.apiType}
      </Button>
      <br />
      <br />
      <TableContainer className="list-style" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{props?.apiType} Name</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topics
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item?.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link href={`/editTopic/${item?._id}`}>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton onClick={() => removeTopic(item._id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={topics.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
