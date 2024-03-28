import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ p: 4 }} elevation={5}>
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
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
