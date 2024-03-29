import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcrumbs = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
      maxItems={3}
      itemsAfterCollapse={2}
    >
      <Link href="#" underline="hover">
        Home
      </Link>
      <Link href="#" underline="hover">
        Catalog
      </Link>
      <Link href="#" underline="hover">
        Accesories
      </Link>
      <Typography color="primary.">Shoes</Typography>
    </Breadcrumbs>
  );
};

export default MuiBreadcrumbs;
