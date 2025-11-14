import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function AddOrder() {
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
    name: "",
    address: "",
    id: "",
    phone: "",
  });

  const [equipmentList] = useState([
    { id: 1, name: "Chair", price: 50 },
    { id: 2, name: "Table", price: 200 },
    { id: 3, name: "Tent", price: 1500 },
    { id: 4, name: "Sound System", price: 2500 },
    { id: 5, name: "Chair", price: 50 },
    { id: 6, name: "Table", price: 200 },
    { id: 7, name: "Tent", price: 1500 },
    { id: 8, name: "Sound System", price: 2500 },
  ]);

  const [selected, setSelected] = useState({});
  const [dates, setDates] = useState({ pickup: "", return: "" });

  const handleUserChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (id, qty) => {
    setSelected({ ...selected, [id]: qty });
  };

  const handleDateChange = e => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const billItems = equipmentList
    .filter(item => selected[item.id] > 0)
    .map(item => ({
      name: item.name,
      qty: selected[item.id],
      price: item.price,
      total: item.price * selected[item.id],
    }));

  const totalCost = billItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <Box sx={{ 
              minHeight: { xs: "100vh", md: "100vh" },
              minWidth: {xs: "40vh", md: "197vh" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              px: { xs: 3, md: 10 },
              background: "linear-gradient(to right, #F9957F, #f2f5d0)"
          }}>

      <Paper sx={{ 
        p: 4,  
        boxShadow: 3,
        width: { xs: "100%", md: "100vh" },
        mb: 5,
        bgcolor: "#1976D223",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
       }}>
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: 700,
            letterSpacing: 0.5,
            color: "#1a1a1a",
            textAlign: "center"
          }}
        >
          Add Order
        </Typography>


        {/* STEP 1: USER DETAILS */}
        {step === 1 && (
        <Box
          sx={{
            maxWidth: { xs: "90%", md: 500 },
            mx: "auto",
            mt: { xs: 3, md: 0 },
            p: { xs: 2, md: 4 },
            bgcolor: "#F9F9F94D",
            borderRadius: 2,
            // boxShadow: 2,
            textAlign: "center"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 2, md: 3 },
              color: "#333",
              fontWeight: 600,
              textAlign: "left"
            }}
          >
            User Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                value={user.name}
                onChange={handleUserChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                fullWidth
                value={user.address}
                onChange={handleUserChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="ID Number"
                name="id"
                fullWidth
                value={user.id}
                onChange={handleUserChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                name="phone"
                fullWidth
                value={user.phone}
                onChange={handleUserChange}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: { xs: 2, md: 4 },
              py: { xs: 0.5, md: 1.2 },
              width: "50%",
              fontWeight: 600,
              fontSize: { xs: "0.9rem", md: "1rem" }
            }}
            disabled={!user.name || !user.address || !user.id || !user.phone}
            onClick={() => setStep(2)}
          >
            Next
          </Button>
        </Box>
      )}

        {/* STEP 2: SELECT EQUIPMENT */}
        {step === 2 && (
        <Box
          sx={{
            maxWidth: { xs: "95%", md: 600 },
            mx: "auto",
            mt: { xs: 2, md: 0 },
            p: { xs: 0, md: 4  },
            // bgcolor: "#F9F9F94D",
            borderRadius: 2,
            textAlign: "center"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: 600,
              color: "#333",
              textAlign: "left",
            }}
          >
            Select Equipment
          </Typography>

          <Table
            sx={{
              mt: { xs: 1, md: 2 },
              "& th": { fontSize: { xs: "0.8rem", md: "1rem" } },
              "& td": { fontSize: { xs: "0.8rem", md: "0.95rem" } }
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell><strong>Equipment</strong></TableCell>
                <TableCell><strong>Price (Rs)</strong></TableCell>
                <TableCell><strong>Qty</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {equipmentList.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      sx={{
                        width: { xs: 70, md: 100 },
                        "& input": { textAlign: "center" }
                      }}
                      value={selected[item.id] || ""}
                      onChange={e =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 0
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              alignItems: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              gap: 2,
              mt: { xs: 2, md: 4 },
              py: { xs: 0.5, md: 1.2 },
              width: { xs: 200,md:300git 
              fontWeight: 600,
              fontSize: { xs: "0.9rem", md: "1rem" }  
            }}
          >
            <Button
              variant="outlined"
              sx={{ 
                width: { xs: "100%", md: "auto" },
                alignItems: "center"
              }}
              onClick={() => setStep(1)}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{ width: { xs: "100%", md: "auto" } }}
              disabled={billItems.length === 0}
              onClick={() => setStep(3)}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}


        {/* STEP 3: DATE SELECTION */}
        {step === 3 && (
        <Box
          sx={{
            maxWidth: { xs: "95%", md: 500 },
            mx: "auto",
            mt: { xs: 3, md: 0 },
            p: { xs: 2, md: 4 },
            bgcolor: "#F9F9F94D",
            borderRadius: 2,
            textAlign: "center"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: 600,
              color: "#333"
            }}
          >
            Select Dates
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                label="Pickup Date"
                InputLabelProps={{ shrink: true }}
                name="pickup"
                fullWidth
                value={dates.pickup}
                onChange={handleDateChange}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                label="Return Date"
                InputLabelProps={{ shrink: true }}
                name="return"
                fullWidth
                value={dates.return}
                onChange={handleDateChange}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1
                }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: { xs: "100%", md: "auto" }
              }}
              onClick={() => setStep(2)}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: "auto" }
              }}
              disabled={!dates.pickup || !dates.return}
              onClick={() => setStep(4)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}


        {/* STEP 4: FINAL BILL */}
        {step === 4 && (
          <Box>
            <Typography variant="h6">Final Bill</Typography>
            <Divider sx={{ my: 2 }} />

            {/* USER DETAILS */}
            <Typography variant="subtitle1">Customer Details</Typography>
            <Typography>Name: {user.name}</Typography>
            <Typography>Address: {user.address}</Typography>
            <Typography>ID: {user.id}</Typography>
            <Typography>Phone: {user.phone}</Typography>

            <Divider sx={{ my: 2 }} />

            {/* EQUIPMENT TABLE */}
            <Typography variant="subtitle1">Equipment Summary</Typography>

            <Table sx={{ mt: 1 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {billItems.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.qty}</TableCell>
                    <TableCell>Rs {row.price}</TableCell>
                    <TableCell>Rs {row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Typography variant="h6" sx={{ mt: 3 }}>
              Total: Rs {totalCost}
            </Typography>

            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Button variant="outlined" onClick={() => setStep(3)}>
                Edit
              </Button>

              <Button variant="contained" color="success">
                Confirm Order
              </Button>

              <Button variant="outlined" color="error">
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
