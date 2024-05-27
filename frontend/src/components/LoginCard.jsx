import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Loader from "./Loader";

export default function LoginCard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.email === "") {
      const error = {
        isError: true,
        message: "Email is required!!",
      };

      setFormError(error);
    } else if (formData.password === "") {
      const error = {
        isError: true,
        message: "Password is required!!",
      };

      setFormError(error);
    } else {
      const error = {
        isError: false,
        message: "",
      };

      setFormError(error);

      try {
        const response = await axios({
          url: "http://127.0.0.1:4000/users/login",
          data: formData,
          method: "POST",
        });

        if (response.data.status) {
          setLoading(false);
          navigate("/dashboard")
        } else {
          setLoading(false);
          const error = {
            isError: true,
            message: response.data.message,
          };
          setFormError(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form action="#" onSubmit={handleLogin}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="div">
                  Login Form
                </Typography>

                {formError.isError && (
                  <Typography variant="p" color="red">
                    {formError.message}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
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

              <Grid item xs={12}>
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
                {loading && <Loader />}
                {!loading && (
                  <Button type="submit" size="medium" variant="contained">
                    Login
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </>
  );
}
