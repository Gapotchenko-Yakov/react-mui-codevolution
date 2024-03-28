import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Box width="250px">
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img src="https://source.unsplash.com/random/256x144" alt="Skeleton" />
      )}

      <Stack direction="row" spacing={1} sx={{ width: "100%", mt: "12px" }}>
        {loading ? (
          <Skeleton
            variant="circular"
            animation="pulse"
            width={40}
            height={40}
          />
        ) : (
          <Avatar>V</Avatar>
        )}

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" animation="wave" width="100%" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" animation="wave" width="100%" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial </Typography>
              <Typography variant="body2">Info about the course </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
