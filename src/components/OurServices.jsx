import { Box, Typography, Container, Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
// import { Grid } from "@mui/material";

export default function OurServices() {
    const services = [
    { id: 1, title: "Event Equipment Rental", desc: "Chairs, tables, tents, and more for your events." },
    { id: 2, title: "Sound & Lighting", desc: "Professional sound systems and lighting for any occasion." },
    { id: 3, title: "Transport & Delivery", desc: "On-time delivery and pickup for all rented items." },
  ];

  return (
    <Box sx={{ width: "100%", py: 6,  bgcolor: "#f5f5f5" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, md: 8 } }}>
          <Typography
            variant="h4"
            textAlign={{ xs: "center", md: "left" }}
            fontWeight={600}
            mb={4}
          >
            Our Services
          </Typography>

          <Grid container spacing={3} justifyContent="center" >
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard title={service.title} desc={service.desc} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}