import { useState, useEffect } from "react";
import OutlinedCard from "../../components/Card";
import { Box } from "@mui/material";
import { getBooks, deleteBook } from "../../actions/book.action";

const Homepage = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      _getBooks();
   }, []);

   const _getBooks = async () => {
      const tempBooks = await getBooks();

      setBooks(tempBooks);
   };

   const _deleteBook = async (_id) => {
      const res = await deleteBook(_id);

      if (!res) return alert("Failed to delete");

      //
      const tempBooks = books.filter((e) => e._id != _id);
      setBooks(tempBooks);
   };

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
            {books.map((book) => (
               <OutlinedCard
                  book={book}
                  key={book._id}
                  _deleteBook={() => _deleteBook(book._id)}
               />
            ))}
         </Box>
      </div>
   );
};

export default Homepage;
