import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/dsdsds.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        // width: "100%",
        minHeight: { xs: "50vh", sm: "60vh", md: "90vh" },
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        color: "#fff",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          // width: "100%",
          // height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4rem" } }}
          fontWeight={700}
          mb={2}
        >
          LUMORA EVENTS
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
          mb={2}
        >
          "GLOWING WITH UNFORGETTABLE MEMORIES"
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" } }}
          mb={4}
        >
          Book, manage, and track your rental orders easily online.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
