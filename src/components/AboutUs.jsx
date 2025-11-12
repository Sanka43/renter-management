import { Box, Grid, Typography, Button } from "@mui/material";
import aboutImage from "../assets/about.png";

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fa",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Title */}
        <Grid size={12}>
            <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
            textAlign={{ xs: "center", md: "left" }}
          >
            About Us
          </Typography>
        </Grid>

        {/* LEFT SIDE - TEXT */}
        <Grid size={{ xs: 12, md: 6 }}
        textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body1" mb={3} sx={{ color: "#555" }}>
            We are a passionate team dedicated to creating meaningful experiences.
            Our goal is to connect people through creative event planning and smart
            digital tools. Whether it's a wedding, concert, or corporate event, we
            focus on quality, innovation, and unforgettable moments.
          </Typography>

          <Typography variant="body2" mb={1}>
            • Experienced in event planning & tech integration
          </Typography>
          <Typography variant="body2" mb={1}>
            • Custom-built booking and rental systems
          </Typography>
          <Typography variant="body2" mb={3}>
            • Professional, creative, and detail-focused
          </Typography>

          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Grid>

        {/* RIGHT SIDE - IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={aboutImage}
            alt="About us"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
