import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating() {
   return (
      <Stack>
         <Rating
            name="half-rating-read"
            defaultValue={4.9}
            precision={0.5}
            readOnly
         />
      </Stack>
   );
}
