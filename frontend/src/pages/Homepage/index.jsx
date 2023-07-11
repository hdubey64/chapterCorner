import React from "react";
import OutlinedCard from "../../components/Card";
import { Box } from "@mui/material";

const Homepage = () => {
   return (
      <div>
         <Box
            sx={{
               display: "Grid",
               gridTemplateColumns: "repeat(4, 1fr)",
               placeItems: "center",
               my: 2,
            }}
         >
            <OutlinedCard />
            <OutlinedCard /> <OutlinedCard /> <OutlinedCard /> <OutlinedCard />{" "}
            <OutlinedCard /> <OutlinedCard />
         </Box>
      </div>
   );
};

export default Homepage;
