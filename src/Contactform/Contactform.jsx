import React from "react";
import "./Contactform.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const validationSchema = Yup.object({
  Firstname: Yup.string()
    .min(2, "Firstname must be at least 2 characters long")
    .required("Firstname is required"),
  Lastname: Yup.string()
    .min(2, "Lastname must be at least 2 characters long")
    .required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "Phonenumber must be at least 10 digits")
    .required("Phonenumber is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters long")
    .required("Description is required"),
});

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      email: "",
      phone: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "lightgrey",
        padding: 3,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", fontSize: 40 }}
        >
          Contact Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="Firstname"
              name="Firstname"
              label="Firstname"
              value={formik.values.Firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.Firstname && Boolean(formik.errors.Firstname)
              }
              helperText={formik.touched.Firstname && formik.errors.Firstname}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="Lastname"
              name="Lastname"
              label="Lastname"
              value={formik.values.Lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Lastname && Boolean(formik.errors.Lastname)}
              helperText={formik.touched.Lastname && formik.errors.Lastname}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default MyForm;
