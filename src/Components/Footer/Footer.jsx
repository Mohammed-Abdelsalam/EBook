import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(30, 30, 30)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "auto",
        marginBottom: "0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="gray" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
