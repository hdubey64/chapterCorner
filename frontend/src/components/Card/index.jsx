import * as React from "react";
import { Box, Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function MediaCard({ book, _deleteBook }) {
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
            <Box
               sx={{
                  height: 170,
                  width: 300,
                  backgroundColor: "white",
                  display: "grid",
                  placeItems: "center",
               }}
            >
               <CardMedia
                  sx={{ height: 150, width: 130 }}
                  image={
                     book?.imageUrl ||
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfhMEEdvPSR2zIdXgaxhGLRKhw3ft9ZRSnWUdKG8zYBQ1vpj9suG77t1JevKZ3YlpAwU&usqp=CAU"
                  }
                  title="green iguana"
               />
            </Box>
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
                     variant="h6"
                     component="div"
                     sx={{
                        fontWeight: "bold",
                        width: "180px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                     }}
                  >
                     {book.title}
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     {moment(book.publicationDate).format("ll")}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "grid",
                     gridTemplateColumns: "repeat(2, 1fr)",
                  }}
               >
                  <Typography gutterBottom variant="p" component="div">
                     <Stack>
                        <Rating
                           name="half-rating-read"
                           defaultValue={book?.rating || 0}
                           precision={0.5}
                           readOnly
                        />
                     </Stack>
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     ${book.price}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "grid",
                     gridTemplateColumns: "repeat(2, 1fr)",
                  }}
               >
                  <Typography gutterBottom variant="p" component="div">
                     {book.author}
                  </Typography>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{ textAlign: "right" }}
                  >
                     {book.genre}
                  </Typography>
               </Box>
               <Box>
                  <Typography
                     gutterBottom
                     variant="p"
                     component="div"
                     sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                     }}
                  >
                     {book.description}...
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
            <Button size="small" sx={{ color: "white" }} onClick={_deleteBook}>
               <DeleteIcon sx={{ fontSize: 35 }} />
            </Button>
            <Button size="small" sx={{ color: "white" }}>
               <EditIcon sx={{ fontSize: 35 }} />
            </Button>
         </CardActions>
      </Card>
   );
}
