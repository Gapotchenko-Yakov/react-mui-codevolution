import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Stack
      border="1px solid"
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          p: 2, //16px
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
        bgcolor="success.main"
        color="white"
        p={2}
        sx={{
          "&:hover": {
            backgroundColor: "success.light",
          },
        }}
      >
        MuiLayout
      </Box>
    </Stack>
  );
};

export default MuiLayout;
