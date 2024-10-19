import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PropTypes from "prop-types";
import CustomModal from "../CustomModal/CustomModal";

const CustomTable = ({ data, actions, route, assignItems }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(""); // State for assignment selection
  const navigate = useNavigate();

  useEffect(() => {
    setSortedData(data);
  }, [data]);

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

  const handleRowClick = (id) => {
    navigate(`/dashboard/${route}/${id}`);
  };

  const handleActionClick = (actionType, row, handler) => {
    setSelectedRow(row);
    setModalAction(actionType);
    setModalOpen(true);

    if (handler) {
      handler(row);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRow(null);
    setSelectedAssignment(""); // Reset assignment selection on close
  };

  return (
    <>
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
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index} hover>
                {Object.entries(row).map(([key, value]) => (
                  <TableCell
                    key={key}
                    onClick={key === "id" ? () => handleRowClick(value) : null}
                    style={key === "id" ? { cursor: "pointer" } : {}}
                  >
                    {typeof value === "object" && value !== null ? (
                      <>
                        {value.name && <p>{value.name}</p>}
                        {value.contact && <p>{value.contact}</p>}
                      </>
                    ) : (
                      value
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "8px",
                    }}
                  >
                    {actions.map((action) => (
                      <IconButton
                        key={action.type}
                        onClick={() =>
                          handleActionClick(action.type, row, action.handler)
                        }
                        title={action.type}
                      >
                        {action.type === "update" && (
                          <EditIcon color="primary" />
                        )}
                        {action.type === "delete" && (
                          <DeleteIcon color="error" />
                        )}
                        {action.type === "assign" && (
                          <AssignmentIcon color="secondary" />
                        )}
                      </IconButton>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomModal
        open={modalOpen}
        onClose={handleCloseModal}
        title={
          modalAction === "delete"
            ? "Delete Item"
            : modalAction === "assign"
            ? "Assign Item"
            : "Edit Item"
        }
        content={
          selectedRow ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
              }}
            >
              {modalAction === "assign" ? (
                <FormControl
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="assign-select-label">Assign to:</InputLabel>
                  <Select
                    labelId="assign-select-label"
                    value={selectedAssignment}
                    onChange={(e) => setSelectedAssignment(e.target.value)}
                    label="Assign to"
                    sx={{
                      width: "100%",
                      borderColor: selectedAssignment ? "gray" : "red",
                      "& .MuiSelect-select": {
                        backgroundColor: selectedAssignment
                          ? "white"
                          : "rgba(255, 70, 70, 0.1)",
                      },
                    }}
                  >
                    {assignItems.map((item, idx) => (
                      <MenuItem key={idx} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                Object.entries(selectedRow || {}).map(([key, value]) => (
                  <Typography key={key} variant="body2">
                    <strong>{key}: </strong> {value}
                  </Typography>
                ))
              )}
            </Box>
          ) : (
            "No data"
          )
        }
        primaryActionText={
          modalAction === "delete"
            ? "Delete"
            : modalAction === "assign"
            ? "Assign"
            : "Save"
        }
        onPrimaryAction={() => {
          console.log(`${modalAction} confirmed for`, selectedRow);
          if (modalAction === "assign") {
            console.log(`Assigned to: ${selectedAssignment}`);
          }
          handleCloseModal();
        }}
        secondaryActionText="Cancel"
        onSecondaryAction={handleCloseModal}
      />
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["update", "delete", "assign"]).isRequired,
      handler: PropTypes.func.isRequired,
    })
  ).isRequired,
  route: PropTypes.string,
  assignItems: PropTypes.arrayOf(PropTypes.string),
};

export default CustomTable;
