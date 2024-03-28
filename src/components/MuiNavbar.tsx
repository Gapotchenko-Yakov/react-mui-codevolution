import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="Catching pokemon icon button"
        >
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" flexGrow={1}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" href="#" color="inherit">
            Features
          </Button>
          <Button variant="outlined" href="#" color="inherit">
            Pricing
          </Button>
          <Button variant="outlined" href="#" color="inherit">
            About
          </Button>
          <Button variant="outlined" href="#" color="inherit">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
