import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" sx={{ backgroundColor: "#005D92" }}>
            <Toolbar>
               {/*} <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
   </IconButton>*/}

               <Typography variant="h5" component="div">
                  <Link to="/" style={{ textDecoration: "none" }}>
                     <Box
                        sx={{
                           fontSize: "2rem",
                           fontWeight: "bold",
                           color: "white",
                        }}
                     >
                        Chapter <AutoStoriesIcon /> Corner
                     </Box>
                  </Link>
               </Typography>

               <Button href="/add" sx={{ bgcolor: "white", color: "#005D92" }}>
                  + Add book
               </Button>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
