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
              minHeight: { xs: "70vh", md: "100vh" },
              minWidth: {xs: "70vh", md: "197vh" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              // position: "relative",
              bgcolor:"#fff",
              color: "#fff",
              px: { xs: 3, md: 10 },
                  // overflow: "hidden", 
          
          }}>

      <Paper sx={{ p: 4,  boxShadow: 3,}}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Add Order
        </Typography>

        {/* STEP 1: USER DETAILS */}
        {step === 1 && (
          <Box sx={{
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  // position: "relative",
                  bgcolor: "red",
                  color: "#fff",
                  px: { xs: 3, sm: 6, md: 10 },
                  overflow: "hidden",
          }}>
            <Typography variant="h6">User Details</Typography>

            <Grid container spacing={2} sx={{ mt: 1 } }>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={user.name}
                  onChange={handleUserChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={user.address}
                  onChange={handleUserChange}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="ID Number"
                  name="id"
                  value={user.id}
                  onChange={handleUserChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleUserChange}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              disabled={!user.name || !user.address || !user.id || !user.phone}
              onClick={() => setStep(2)}
            >
              Next
            </Button>
          </Box>
        )}

        {/* STEP 2: SELECT EQUIPMENT */}
        {step === 2 && (
        <Box>
          <Typography variant="h6">Select Equipment</Typography>

          <Table sx={{ mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell><strong>Equipment</strong></TableCell>
                <TableCell><strong>Price (Rs)</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
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
                      sx={{ width: 100 }}
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

          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="outlined" onClick={() => setStep(1)}>Back</Button>

            <Button
              variant="contained"
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
          <Box>
            <Typography variant="h6">Select Dates</Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Pickup Date"
                  InputLabelProps={{ shrink: true }}
                  name="pickup"
                  fullWidth
                  value={dates.pickup}
                  onChange={handleDateChange}
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
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button variant="outlined" onClick={() => setStep(2)}>
                Back
              </Button>

              <Button
                variant="contained"
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
