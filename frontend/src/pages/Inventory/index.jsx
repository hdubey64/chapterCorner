import React from "react";
import MyForm from "../../components/Form";
import { Box } from "@mui/material";

const Inventory = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <MyForm />
      </Box>
   );
};

export default Inventory;
