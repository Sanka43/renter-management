import { Box, Typography, Container, Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

export default function OurServices() {
  const services = [
    { id: 1, title: "Event Equipment Rental", desc: "Chairs, tables, tents, and more for your events." },
    { id: 2, title: "Sound & Lighting", desc: "Professional sound systems and lighting for any occasion." },
    { id: 3, title: "Transport & Delivery", desc: "On-time delivery and pickup for all rented items." },
  ];

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box sx={{ width: "100%", py: 6, bgcolor: "#f5f5f5" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 8 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <Typography
            variant="h4"
            textAlign={{ xs: "center", md: "left" }}
            fontWeight={600}
            mb={4}
            color="primary"
          >
            Our Services
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Grid container spacing={3} justifyContent="center">
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id} color= "#0D1B2AFF">
                <motion.div variants={cardVariants}>
                  <ServiceCard title={service.title} desc={service.desc} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
