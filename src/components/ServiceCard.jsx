import { Card, CardContent, Typography } from "@mui/material";

export default function ServiceCard({ title, desc }) {
  return (
    <Card sx={{ 
      borderRadius: 3,
      boxShadow: 3, 
      height: "100%", 
      transition: "0.3s", 
      "&:hover": { boxShadow: 6 } 
      }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
