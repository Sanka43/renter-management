import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0d1b2a",
        color: "#ffffff",
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={6}>
        {/* Logo / About */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2, color: "#e0e1dd" }}
          >
            LUMORA Events
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#ccd5ae" }}>
            We bring creative event ideas to life with a blend of culture,
            community, and modern entertainment.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "#e0e1dd" }}
          >
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" color="#ccd5ae">
              Home
            </Link>
            <Link href="#" underline="none" color="#ccd5ae">
              Services
            </Link>
            <Link href="#" underline="none" color="#ccd5ae">
              About Us
            </Link>
            <Link href="#" underline="none" color="#ccd5ae">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "#e0e1dd" }}
          >
            Contact
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccd5ae" }}>
            Hali Ela, Badulla, Sri Lanka
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccd5ae" }}>
            +94 71 862 8191
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccd5ae" }}>
            lumoraevents0@gmail.com
          </Typography>

          <Box sx={{ mt: 2 }}>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Note */}
      <Box
        sx={{
          borderTop: "1px solid #415a77",
          textAlign: "center",
          mt: 2,
          pt: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "#778da9", }}>
          © {new Date().getFullYear()} LUMORA Events. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
