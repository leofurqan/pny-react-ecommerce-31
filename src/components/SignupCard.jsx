import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";

export default function SignupCard() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    address: "",
  });
  const [formError, setFormError] = useState({
    firstName: true,
    firstNameMessage: "First Name Required!!",
    lastName: false,
    lastNameMessage: "",
    email: false,
    emailMessage: "",
    password: false,
    passwordMessage: "",
    confirmPassword: false,
    confirmPasswordMessage: "",
    phone: false,
    phoneMessage: "",
  });
  return (
    <>
      <form action="#">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="div">
                  Signup Form
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone No."
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="password"
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button type="submit" size="medium" variant="contained">
                  Signup
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </>
  );
}
