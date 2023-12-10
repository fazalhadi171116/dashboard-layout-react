import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../sidebar/Sidebar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Products = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [name, setname] = React.useState("");
  const [price, setprice] = React.useState("");
  const [proId, setProId] = React.useState(null);
  const [rows, setRows] = React.useState([]);
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

  // Specify the URL of the API you want to fetch data from

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Make a GET request using the fetch function
        const response = await fetch("https://fakestoreapi.com/products");

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON response
        const result = await response.json();

        // Set the data state with the fetched result
        setRows(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Delete deleteHandler
  const deleteHandler = (id) => {
    const data = rows.filter((val) => val.id !== id);
    setRows(data);
  };
  // edit data
  const editHandler = (data, index) => {
    setProId(index);
    setname(data.title);
    setprice(data.price);
  };

  const updateData = (e) => {
    e.preventDefault();
    rows[proId] = { ...rows[proId], title: name, price: price };
    // console.log(rows[proId])
    setRows([...rows, rows[proId]]);
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <Sidebar />
          </div>

          <div class="col-10 pt-2">
            <h3>All Products</h3>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Image</StyledTableCell>
                    <StyledTableCell align="right">Rating</StyledTableCell>
                    <StyledTableCell align="right">Operation</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.title}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <img src={row.image} width="50px" height="50px" />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.rating.rate}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => editHandler(row, index)}
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandler(row.id)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Update Data
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3 mt-3">
                        <label for="text" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div class="mb-3 mt-3">
                        <label for="text" class="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Price"
                          value={price}
                          onChange={(e) => setprice(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={updateData}
                      >
                        Update Data
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
