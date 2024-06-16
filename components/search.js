import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "next/link";

const getTopics = async (type) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics?type=${type}`, {
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    verticalAlign: "middle", // Align content vertically
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

const HighlightedText = ({ text, highlight }) => {
  if (!highlight) return <span>{text}</span>;

  const textString = String(text); // Convert text to string
  const parts = textString.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: "yellow" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function CustomizedTables(props) {
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [filteredTopics, setFilteredTopics] = React.useState([]);

  React.useEffect(() => {
    async function fetchTopics() {
      const data = await getTopics(typeFilter);
      setTopics(data.topics || []);
      setFilteredTopics(data.topics || []);
    }
    fetchTopics();
  }, [typeFilter]); // Trigger fetchTopics when typeFilter changes

  React.useEffect(() => {
    const filtered = topics.filter(
      (topic) =>
        (topic.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (topic.amount?.toString() || "").includes(search.toLowerCase())
    );
    setFilteredTopics(filtered);
  }, [search, topics]);

  return (
    <div style={{ margin: "20px" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Topics"
          inputProps={{ "aria-label": "search topics" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div style={{ marginBottom: "20px" }}>
        <Button
          className="button"
          onClick={() => setTypeFilter("deal")}
          sx={{ marginRight: "10px" }}
        >
          Deals
        </Button>
        <Button
          className="button"
          onClick={() => setTypeFilter("lead")}
          sx={{ marginRight: "10px" }}
        >
          Leads
        </Button>
        <Button
          className="button"
          onClick={() => setTypeFilter("organization")}
        >
          Organizations
        </Button>
      </div>
      {search && filteredTopics.length > 0 ? (
        <TableContainer className="list-style" component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTopics.map((topic, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    <Link
                      href={topic?.type}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <HighlightedText text={topic.name} highlight={search} />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link
                      href={topic?.type}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <HighlightedText
                        text={topic.contact}
                        highlight={search}
                      />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link
                      href={topic?.type}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <HighlightedText
                        text={topic.amount.toString()}
                        highlight={search}
                      />
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        search && <div>No results found</div>
      )}
    </div>
  );
}
