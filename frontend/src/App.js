import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Inventory from "./pages/Inventory";
import { Box } from "@mui/material";

function App() {
   return (
      <Box sx={{ backgroundColor: "#DBDBDB" }}>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/add" element={<Inventory />} />
            </Routes>
         </BrowserRouter>
      </Box>
   );
}

export default App;
