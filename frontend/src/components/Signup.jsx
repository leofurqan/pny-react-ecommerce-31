import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SignupCard from "./SignupCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Signup() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate()
  if (user) {
    navigate('/')
  }

  return (
    <Container maxWidth="sm" sx={{height: '100vh'}}>
      <Grid sx={{height: '100vh'}} container justifyContent="center" alignItems="center">
        <SignupCard />
        <Typography variant="p" component="div">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Grid>
    </Container>
  );
}
