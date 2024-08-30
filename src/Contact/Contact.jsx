import React from "react";
import Contactform from "../Contactform/Contactform";
import { Grid, Typography, Box } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ 
        px: { xs: 5, md: 15}, 
        mb: 4
    }}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        sx={{
          marginTop: 10,
          color: "yellow",
          fontSize: { xs: 30, md: 50 }, 
          mb: 5,
        }}
      >
        <Typography
          sx={{
            display: "inline",
            fontSize: { xs: 30, md: 50 }, 
            color: "white",
          }}
        >
          Better
        </Typography>{" "}
        Together
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 1,
            padding: { xs: 2, md: 4 }, 
            boxShadow:
              "rgba(16, 14, 14, 0.17) 0px -23px 25px 0px inset, " +
              "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
              "rgba(11, 11, 11, 0.1) 0px -79px 40px 0px inset, " +
              "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
              "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
              "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
              "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
              "rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography variant="h5" gutterBottom sx={{ pb: 3 }}>
              I enjoy working with dedicated creatives from businesses that make
              the world beautiful
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ pb: 3 }}>
              We can do so much together, Let’s talk
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ pb: 3 }}>
              If you want to email:{" "}
              <a href="mailto:moorthy.chandiran21@gmail.com" style={{ wordBreak: "break-word" }}>
                moorthy.chandiran21@gmail.com
              </a>
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ pb: 3 }}>
              If you want to hear my voice:{" "}
              <a href="tel:+919360485526" style={{ wordBreak: "break-word" }}>
                +91 93604 85526
              </a>
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ pb: 3 }}>
              If you want to be influenced:{" "}
              <a
                href="https://www.instagram.com/moorthy_karthick.8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ wordBreak: "break-word" }}
              >
                @moorthy_karthick.8
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 1,
            padding: { xs: 2, md: 4 }, // Adjust padding for small and medium+ screens
            boxShadow:
              "rgba(16, 14, 14, 0.17) 0px -23px 25px 0px inset, " +
              "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
              "rgba(11, 11, 11, 0.1) 0px -79px 40px 0px inset, " +
              "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
              "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
              "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
              "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
              "rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
        >
          <Contactform />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
