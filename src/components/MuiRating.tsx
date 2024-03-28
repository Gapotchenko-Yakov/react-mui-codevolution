import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useRef, useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log("🚀 ~ MuiRating ~ value:", value);
  //   const ratingRef = useRef<number | null>(null);
  //   console.log("🚀 ~ MuiRating ~ ratingRef:", ratingRef.current);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setValue(value);
    // ratingRef.current = value;
  };

  return (
    <Stack spacing={2} direction="row">
      <Rating
        value={value}
        onChange={handleChange}
        size="large"
        precision={0.1}
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" color="error" />}
      />
    </Stack>
  );
};

export default MuiRating;
