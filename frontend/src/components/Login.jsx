import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import LoginCard from "./LoginCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate()
  if (user) {
    navigate('/')
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <Grid
        sx={{ height: "100vh" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <LoginCard />
        <Typography variant="p" component="div">
          Don't have an account? <Link to="/signup">Register</Link>
        </Typography>
      </Grid>
    </Container>
  );
}
