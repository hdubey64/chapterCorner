import * as React from "react";
import { Box, Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "../Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function MediaCard() {
   return (
      <Card
         sx={{
            maxWidth: 300,
            backgroundColor: "#005D92",
            color: "white",
            my: 3,
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",

               alignItems: "center",
            }}
         >
            <CardMedia
               sx={{ height: 170, width: 300 }}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfhMEEdvPSR2zIdXgaxhGLRKhw3ft9ZRSnWUdKG8zYBQ1vpj9suG77t1JevKZ3YlpAwU&usqp=CAU"
               title="green iguana"
            />
         </Box>
         <CardContent className="card">
            <Box>
               <Box
                  sx={{
                     display: "grid",
                     gridTemplateColumns: "2fr 1fr",
                  }}
               >
                  <Typography
                     gutterBottom
                     variant="h5"
                     component="div"
                     sx={{ fontWeight: "bold" }}
                  >
                     The Hobbit
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     1937-09-21
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "grid",
                     gridTemplateColumns: "repeat(2, 1fr)",
                  }}
               >
                  <Typography gutterBottom variant="p" component="div">
                     <BasicRating />
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     $14.99
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "grid",
                     gridTemplateColumns: "repeat(2, 1fr)",
                  }}
               >
                  <Typography gutterBottom variant="p" component="div">
                     J.R.R. Tolkien"
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     Fantasy
                  </Typography>
               </Box>
               <Box>
                  <Typography gutterBottom variant="p" component="div">
                     Bilbo Baggins' unexpected adventure with dwarves and a
                     powerful ring
                  </Typography>
               </Box>
            </Box>
         </CardContent>
         <CardActions
            sx={{
               display: "Grid",
               gridTemplateColumns: "repeat(2, 1fr)",
            }}
         >
            <Button size="small" sx={{ color: "white" }}>
               <DeleteIcon sx={{ fontSize: 35 }} />
            </Button>
            <Button size="small" sx={{ color: "white" }}>
               <EditIcon sx={{ fontSize: 35 }} />
            </Button>
         </CardActions>
      </Card>
   );
}
