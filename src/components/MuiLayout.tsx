import { Box } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiLayout
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        color="success.dark"
        p={2}
      >
        MuiLayout
      </Box>
    </>
  );
};

export default MuiLayout;
