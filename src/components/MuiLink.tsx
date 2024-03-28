import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Link
      </Link>
      <Link href="#" color="secondary" variant="body2" underline="hover">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="success" underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
