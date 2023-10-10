import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card } from "@mui/material";

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h2" variant="h5">
              Welcome to the demo
            </Typography>
            <Typography component="h6" variant="h6">
              This build utilizes...
            </Typography>
            <Box className="flex">
              <Paper style={{ padding: "5px", height: "100%" }} elevation={3}>
                <img
                  height="80px"
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_bigquery_logo_icon_168150.png"
                ></img>
              </Paper>
              <Paper style={{ padding: "5px", height: "100%" }} elevation={3}>
                <img
                  height="80px"
                  src="data:image/png;base64,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"
                ></img>
              </Paper>
            </Box>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Typography variant="h4">Login as..</Typography>

              <div className="login-button-container">
                <Link href="/game">
                  <Button
                    fullHeight
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Player
                  </Button>
                </Link>
                <Link href="/company">
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Game Developer
                  </Button>
                </Link>
              </div>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
