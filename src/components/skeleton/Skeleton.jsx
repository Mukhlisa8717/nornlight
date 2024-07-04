import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonComponent = () => {
    const perPageCount = 8
  return (
    <div className="container">
      <Grid container spacing={2}>
        {new Array(perPageCount).fill("").map((_, inx) => (
          <Grid key={inx} item xs={6} sm={5} md={4} lg={3}>
            <Skeleton variant="rectangular" height={250} />
            <Box
              sx={{
                pt: 0.5,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Skeleton width="80%" />
              <Skeleton width="30%" />
              <Skeleton width="40%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkeletonComponent;
