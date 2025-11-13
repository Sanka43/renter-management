import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from "../assets/dsdsds.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: "70vh", md: "100vh" },
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        color: "#fff",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: { xs: 3, sm: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}
      >
        <Typography
          component={motion.h1}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4.5rem" },
            fontWeight: 800,
            letterSpacing: 2,
            mb: 2,
            background: "linear-gradient(90deg, #ff4d6d, #ff9068)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          LUMORA EVENTS
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            fontWeight: 500,
            fontStyle: "italic",
            mb: 3,
            color: "#ffe6e6",
            textShadow: "1px 1px 4px rgba(0,0,0,1)",
          }}
        >
          "Glowing with unforgettable memories"
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
            mb: 4,
            lineHeight: 1.5,
            color: "#fff",
            textShadow: "1px 1px 6px rgba(0,0,0,1)",
          }}
        >
          Book, manage, and track your event rentals seamlessly online.
        </Typography>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#ff4d6d",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "10px",
              textTransform: "uppercase",
              boxShadow: "0px 4px 15px rgba(255,77,109,0.5)",
              "&:hover": { bgcolor: "#ff1e56" },
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
