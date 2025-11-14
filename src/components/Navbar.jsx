import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ServiceIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";

const navItems = ["Home", "Services", "About", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Function to scroll smoothly to a section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // close drawer on mobile after clicking
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ justifyContent: "center", position: "relative"}}>
          {/* Desktop buttons in center */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => handleScroll(item)}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile title */}
          <Typography
          variant="h6"
          sx={{
            position: "absolute",
            right: 16,
            display: { xs: "block", md: "none" },
            fontWeight: 500,
            fontFamily: "Georgia, serif",
            letterSpacing: 0.5,
            color: "#ffffff"
          }}
        >
          Lumora Events
        </Typography>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              left: 16,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "#f5f5f5"
          }
        }}
      >
        <Box
          sx={{
            p: 2,
            pt: 3
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
              mb: 2,
              textAlign: "center",
              color: "#333"
            }}
          >
            Menu
          </Typography>

          <List>
            {navItems.map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  mb: 1,
                  borderRadius: 1
                }}
              >
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    py: 1.2,
                    "&:hover": {
                      bgcolor: "#e0e0e0"
                    }
                  }}
                  onClick={() => handleScroll(text)}
                >
                  {/* Simple icons for each item */}
                  <Box sx={{ mr: 2, color: "primary" }}>
                    {index === 0 && <HomeIcon />}  
                    {index === 1 && <ServiceIcon />}  
                    {index === 2 && <InfoIcon />}  
                    {index === 3 && <ContactsIcon />}  
                  </Box>

                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#333"
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
