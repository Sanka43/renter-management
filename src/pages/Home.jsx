import { Box, Typography, Grid, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";

export default function Home() {
  

  return (
    <Box sx={{}}>
      <Navbar />
      <HeroSection />
      <OurServices />
      <AboutUs />
      <Footer />
    </Box>
  );
}
