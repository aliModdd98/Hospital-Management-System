import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  TableSortLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PropTypes from "prop-types";

const CustomTable = ({ data, actions }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState(null);
  const [sortedData, setSortedData] = useState(data);

  // Effect to handle data changes from props
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  // Sort the data based on column and sort order
  const handleSort = (column) => {
    const isAscending = sortBy === column && sortOrder === "asc";
    setSortOrder(isAscending ? "desc" : "asc");
    setSortBy(column);

    const newSortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return isAscending ? 1 : -1;
      if (a[column] > b[column]) return isAscending ? -1 : 1;
      return 0;
    });

    setSortedData(newSortedData);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0] || {}).map((column) => (
              <TableCell sx={{ fontWeight: "bold" }} key={column}>
                <TableSortLabel
                  active={sortBy === column}
                  direction={sortBy === column ? sortOrder : "asc"}
                  onClick={() => handleSort(column)}
                >
                  {column}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              {Object.entries(row).map(([key, value]) => (
                <TableCell key={key}>{value}</TableCell>
              ))}
              <TableCell>
                {actions.map((action) => (
                  <IconButton
                    key={action.type}
                    onClick={() => action.handler(row)}
                    title={action.type}
                  >
                    {action.type === "update" && <EditIcon color="primary" />}
                    {action.type === "delete" && <DeleteIcon color="error" />}
                    {action.type === "assign" && (
                      <AssignmentIcon color="secondary" />
                    )}
                  </IconButton>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// PropTypes validation
CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["update", "delete", "assign"]).isRequired,
      handler: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default CustomTable;
