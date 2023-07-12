import axios from "axios";

const baseURL = "http://localhost:4000";

export const getBooks = async () => {
   const res = await axios.get(`${baseURL}/book`);

   if (!res || !res.data) return [];

   return res.data.books;
};

export const createBook = async (values) => {
   const res = await axios.post(`${baseURL}/book`, values);

   if (!res || !res.data) return null;

   return res.data.book;
};

export const deleteBook = async (_id) => {
   const res = await axios.delete(`${baseURL}/book/${_id}`);
   if (!res || !res.data) return null;
   return res.data.deletedBook;
};
