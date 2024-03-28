import {
  CatchingPokemon,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Button
            variant="outlined"
            href="#"
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button variant="outlined" href="#" color="inherit">
            Login
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
