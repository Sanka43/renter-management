import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
import AddOrder from "./pages/AddOrder";
import Home from "./pages/Home";
import { ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HeroSection />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/add-order" element={<AddOrder />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
  