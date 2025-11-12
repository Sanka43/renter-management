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
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: "1200px", mx: "auto" , direction: { xs: "column", md: "row" }}}
      >
        {/* Title */}
        <Grid item xs={12}>
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            mb={3}
            sx={{ color: "#555", textAlign: { xs: "center", md: "left" } }}
          >
            We are a passionate team dedicated to creating meaningful experiences.
            Our goal is to connect people through creative event planning and smart
            digital tools. Whether it's a wedding, concert, or corporate event, we
            focus on quality, innovation, and unforgettable moments.
          </Typography>

          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
          </Box>
        </Grid>

        {/* RIGHT SIDE - IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutImage}
            alt="About us"
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>

  );
}
