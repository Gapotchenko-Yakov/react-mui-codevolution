import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log("🚀 ~ MuiBottomNavigation ~ value:", value);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      showLabels
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
