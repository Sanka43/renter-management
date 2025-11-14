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
              left: 16,
              display: { xs: "block", md: "none" },
            }}
          >
            LOMORA EVENTS
          </Typography>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              right: 16,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleScroll(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
