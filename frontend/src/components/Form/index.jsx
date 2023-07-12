import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createBook } from "../../actions/book.action";
import { Grid } from "@mui/material";

const initialValue = {
   title: "",
   author: "",
   publicationDate: "",
   rating: "",
   price: "",
   genre: "",
   description: "",
};

export default function MyForm() {
   const [formData, setFormData] = React.useState(initialValue);

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData); // You can perform form submission or other actions here

      const res = await createBook({
         ...formData,
         publicationDate: new Date(formData.publicationDate),
      });

      console.log("log: res", res);
   };

   const resetForm = () => setFormData(initialValue);

   return (
      <Box
         sx={{
            backgroundColor: "white",
            mt: 3,
            px: 4,
            py: 2,
            width: 440,
            border: "none",
            borderRadius: "10px",
         }}
      >
         <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
               maxWidth: 500,
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <TextField
               name="imageUrl"
               label="Image Link"
               value={formData.imageUrl}
               onChange={handleInputChange}
               margin="normal"
               fullWidth
            />
            <TextField
               name="title"
               label="Book title"
               value={formData.title}
               onChange={handleInputChange}
               margin="normal"
               fullWidth
            />
            <TextField
               name="author"
               label="author"
               value={formData.author}
               onChange={handleInputChange}
               margin="normal"
               fullWidth
            />
            <TextField
               name="genre"
               label="Genre"
               value={formData.genre}
               onChange={handleInputChange}
               margin="normal"
               fullWidth
            />
            <TextField
               type="date"
               name="publicationDate"
               label="Publication Date"
               value={formData.publicationDate}
               onChange={handleInputChange}
               margin="normal"
               fullWidth
            />
            <Box
               sx={{
                  display: "Grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
               }}
            >
               <TextField
                  type="number"
                  name="price"
                  label="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
               />
               <TextField
                  type="number"
                  name="rating"
                  label="Rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
               />
            </Box>
            <TextField
               name="description"
               label="Description"
               value={formData.description}
               onChange={handleInputChange}
               margin="normal"
               multiline
               rows={2}
               fullWidth
            />

            <Button
               type="submit"
               variant="contained"
               color="primary"
               sx={{
                  backgroundColor: "#005D92",
                  color: "white",
                  px: 5,
                  py: 1,
               }}
            >
               Add
            </Button>
            <Button
               variant="contained"
               color="primary"
               sx={{
                  backgroundColor: "#005D92",
                  color: "white",
                  px: 5,
                  py: 1,
               }}
               onClick={resetForm}
            >
               Reset
            </Button>
         </Box>
      </Box>
   );
}
