import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import fotterimage from "../Components/Assets/fotter image.png";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        backgroundImage: `url("${fotterimage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="inherit">
              As a fresher i am Eager to learn New Technology and need to Again
              More Knowledge from the Company
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="inherit">
              <a
                href="mailto:moorthy.chandiran21@gmail.com"
                style={{
                  wordBreak: "break-word",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Email:moorthy.chandiran21@gmail.com
              </a>{" "}
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: +91 9360485526
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://github.com/moorthygithub" color="inherit">
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/moorthy-c-982333217/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://telegram.me/moorthychandiran" color="inherit">
              <TelegramIcon />
            </Link>
            <a
              href="https://gitlab.com/moorthy.chandiran21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={30}
                height={21}
                style={{ fill: "white" }}
              >
                <path d="M503.5 204.6L502.8 202.8L433.1 21C431.7 17.5 429.2 14.4 425.9 12.4C423.5 10.8 420.8 9.9 417.9 9.6C415 9.3 412.2 9.7 409.5 10.7C406.8 11.7 404.4 13.3 402.4 15.5C400.5 17.6 399.1 20.1 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.1 111.5 17.6 109.6 15.5C107.6 13.4 105.2 11.7 102.5 10.7C99.9 9.7 97 9.3 94.1 9.6C91.3 9.9 88.5 10.8 86.1 12.4C82.8 14.4 80.3 17.5 78.9 21L9.3 202.8L8.5 204.6C-1.5 230.8-2.7 259.6 5 286.6C12.8 313.5 29.1 337.3 51.5 354.2L51.7 354.4L52.3 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
              </svg>
            </a>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="inherit" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
