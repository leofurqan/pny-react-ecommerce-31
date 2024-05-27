import React from 'react'
import { Container, Grid } from "@mui/material";
import LoginCard from "./LoginCard"

export default function Login() {
  return (
    <Container maxWidth="sm" sx={{height: '100vh'}}>
      <Grid sx={{height: '100vh'}} container justifyContent="center" alignItems="center">
        <LoginCard />
      </Grid>
    </Container>
  )
}
