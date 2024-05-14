import React, { useState } from "react";
import axios from "axios";
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
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.first_name === "") {
      const error = {
        isError: true,
        message: "First name is required!!",
      };

      setFormError(error);
    } else if (formData.last_name === "") {
      const error = {
        isError: true,
        message: "Last name is required!!",
      };

      setFormError(error);
    } else if (formData.email === "") {
      const error = {
        isError: true,
        message: "Email is required!!",
      };

      setFormError(error);
    } else if (formData.phone === "") {
      const error = {
        isError: true,
        message: "Phone is required!!",
      };

      setFormError(error);
    } else if (formData.password === "") {
      const error = {
        isError: true,
        message: "Password is required!!",
      };

      setFormError(error);
    } else if (formData.confirm_password === "") {
      const error = {
        isError: true,
        message: "Confirm Password is required!!",
      };

      setFormError(error);
    } else if (formData.password !== formData.confirm_password) {
      const error = {
        isError: true,
        message: "Password does not match",
      };

      setFormError(error);
    } else {
      const error = {
        isError: false,
        message: "",
      };

      setFormError(error);

      const {confirm_password, ...data} = formData

      try {
        const response = await axios({
          url: "http://127.0.0.1:4000/users/register",
          data: data,
          method: "POST",
        });
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <>
      <form action="#" onSubmit={handleSignup}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="div">
                  Signup Form
                </Typography>

                {formError.isError && (
                  <Typography variant="p" color="red">
                    {formError.message}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  onChange={handleChange}
                  name="first_name"
                  value={formData.first_name}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  onChange={handleChange}
                  name="last_name"
                  value={formData.last_name}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone No."
                  variant="outlined"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formData.password}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="password"
                  id="outlined-basic"
                  label="Confirm Password"
                  onChange={handleChange}
                  variant="outlined"
                  name="confirm_password"
                  value={formData.confirm_password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  multiline
                  onChange={handleChange}
                  rows={4}
                  name="address"
                  value={formData.address}
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
