import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box sx={{ width: "300px" }}>
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React components receive data and return what should appear on the
            screen. You can pass them new data in response to an interaction,
            like when the user types into an input. React will then update the
            screen to match the new data.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
