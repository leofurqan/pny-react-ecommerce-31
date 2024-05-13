import React from "react";
import { Container, Grid } from "@mui/material";
import SignupCard from "./SignupCard";

export default function Signup() {
  return (
    <Container maxWidth="sm" sx={{height: '100vh'}}>
      <Grid sx={{height: '100vh'}} container justifyContent="center" alignItems="center">
        <SignupCard />
      </Grid>
    </Container>
  );
}
