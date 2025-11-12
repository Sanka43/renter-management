import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "#f0f0f0",
        mt: 6,
        px: { xs: 2, sm: 4 },
        // width: "100%",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Renter Management. All rights reserved.
      </Typography>
    </Box>
  );
}
