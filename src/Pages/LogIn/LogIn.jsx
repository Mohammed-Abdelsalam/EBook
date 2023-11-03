import React from "react";

// Router
import { useNavigate } from "react-router-dom";

// Material UI
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

// React hook form
import { useForm } from "react-hook-form";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const LogIn = ({ auth }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const values = getValues();

  const onSubmit = () => {
    navigate(`/ebook`);
    auth(true);
    console.log(values);
  };

  const styles = {
    root: {
      margin: "0 auto",
      position: "relative",
      padding: "0 !important",
      minHeight: "calc(85vh - 95px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mainContainer: {
      zIndex: 2,
      form: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: "24px",
        width: "440px",
      },
      input: {
        backgroundColor: "rgb(239, 243, 245)",
        borderRadius: "12px",
        outline: "transparent",
        width: "100%",
      },
      label: {
        color: "black",
        borderRadius: "12px",
        outline: "transparent",
        fontSize: "14px",
      },
      button: {
        backgroundColor: "black",
        color: "white",
        padding: "24px",
        textTransform: "uppercase",
        width: "30%",
        fontSize: "14px",
        height: "46px",
        cursor: "pointer",
        letterSpacing: "1.4px",
        border: "1px solid white",
        borderRadius: "12px",
      },
    },
    h1: {
      fontSize: "45px !important",
      fontWeight: "900 !important",
    },
    "@media (max-width: 600px)": {
      mainContainer: {
        form: {
          width: "90%",
          marginLeft: "15px",
        },
        button: {
          width: "40%",
        },
        h1: {
          paddingLeft: "10px",
          fontSize: "24px !important",
        },
      },
    },
    text: {
      marginTop: "24px",
      color: "rgb(85, 85, 85)",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.41px",
    },
  };

  return (
    <React.Fragment>
      <Nav />
      <Grid container style={styles.root}>
        <Box>
          <Typography style={styles.h1}>Log In</Typography>
          <form
            style={styles.mainContainer.form}
            onSubmit={handleSubmit((data) => {
              if (
                data.email === "test@gmail.com" &&
                data.Password === "12345678"
              ) {
                onSubmit();
              } else {
                alert("Email or password is incorrect");
              }
            })}
          >
            <TextField
              {...register("email", {
                required: {
                  value: true,
                  message: `Email field is required`,
                },
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Invalid email address",
                },
              })}
              label="Email"
              variant="outlined"
              error={!!errors?.email}
              helperText={errors?.email ? errors?.email?.message : null}
              style={styles.mainContainer.input}
            />
            <TextField
              {...register("Password", {
                required: {
                  value: true,
                  message: `Password field is required`,
                },
                minLength: {
                  value: 8,
                  message: `Min number is 8`,
                },
                pattern: {
                  value: /^\d{8,}$/,
                  message: "Password must contain 8 Numbers",
                },
              })}
              label="Password"
              variant="outlined"
              type="password"
              error={!!errors?.Password}
              helperText={errors?.Password ? errors?.Password?.message : null}
              style={styles.mainContainer.input}
            />
            <Button
              variant="contained"
              type="submit"
              value="submit"
              style={styles.mainContainer.button}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default LogIn;
