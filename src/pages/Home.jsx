import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <Box>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section - "Home" */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <OurServices />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Contact Section (Footer is used for contact area) */}
      <section id="contact">
        <Footer />
      </section>
    </Box>
  );
}
