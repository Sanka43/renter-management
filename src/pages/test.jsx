import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import aboutImage from "../assets/about.png";

export default function AboutUs() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fa",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
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
            sx={{ mb: 0 }}
          >
            About Us
          </Typography>
        </Grid>

        {/* LEFT SIDE - TEXT */}
        <Grid size={{ xs: 12, md: 6,}}
        textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body1" mb={4} sx={{ color: "#555", textAlign: "justify" }}>
            LUMORA Events, founded in 2025 in Hali Ela, is a privately owned event management
             startup that blends modern creativity with Sri Lankan cultural heritage. The company
              organizes festivals, corporate functions, social gatherings, and entertainment programs,
               while also offering event equipment rentals. With a focus on professionalism, 
               creativity, and community connection, LUMORA aims to support small businesses, 
               promote young talent, and strengthen the country’s entertainment industry.

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

          <Button variant="contained" color="primary" onClick={handleOpen}>
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

      {/* POPUP DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          sx={{ fontSize: "4vh", fontWeight: "bold", color: "primary.main", textAlign: "center" }}
        >
          More About LUMORA
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ mb: 2, color: "#444", textAlign: "justify"}} >
            Founded in 2025 and based in Hali Ela, LUMORA Events is a privately owned event management 
            startup specializing in reimagining entertainment experiences that began in 2012. The company 
            was established with the goal of planning creative, well-organized and culturally vibrant 
            events that connect people and inspire community spirit.
            <br/>
            <br/>
            LUMORA Events plans and executes a variety of projects including Event Equipment Rent, 
            festivals, corporate events, social gatherings and entertainment programs. Each event is 
            managed with a strong focus on creativity, professionalism and attention to detail.
            <br/>
            <br/>
            The company’s core strength is combining modern event concepts with local cultural elements 
            – LUMORA’s goal is to create unforgettable and meaningful experiences.
          </Typography>

          <Typography variant="h6"
            fontWeight="bold"
            color="primary"
            gutterBottom
            textAlign={{ xs: "center", md: "center" }}
            sx={{ mb: 0 }}>
            Mission
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: "#444" }} textAlign={{ xs: "center", md: "center" }}>
            “To create unique event experiences that blend entertainment, culture, and community engagement.”
          </Typography>

          <Typography variant="h6"
            fontWeight="bold"
            color="primary"
            gutterBottom
            textAlign={{ xs: "center", md: "center" }}
            sx={{ mb: 0 }}>
            Vision
          </Typography>

          <Typography variant="body1" sx={{ color: "#444" }} textAlign={{ xs: "center", md: "center" }}>
            “To become a leading event management company known for innovation and quality.”
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
