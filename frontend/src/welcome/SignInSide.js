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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
          md={5}
          sx={{
            backgroundImage:
              "url(https://retail-merchandiser.com/wp-content/uploads/sites/8/2023/05/FMCG-800x445.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
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
              <Card
                elevation={2}
                sx={{ maxWidth: 250, margin: "0 auto", padding: "0.1em" }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                  title="nodejs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    NodeJS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Express Back-end
                  </Typography>
                </CardContent>
              </Card>

              <Card
                elevation={2}
                sx={{ maxWidth: 250, margin: "0 auto", padding: "0.1em" }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  title="react"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    React Front-end
                  </Typography>
                </CardContent>
              </Card>

              <Card
                elevation={2}
                sx={{ maxWidth: 250, margin: "0 auto", padding: "0.1em" }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  image="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_bigquery_logo_icon_168150.png"
                  title="bigquery"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BigQuery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Serverless, fully managed, petabyte-scale analytics data
                    warehouse
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://cloud.google.com/bigquery">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>

              <Card
                elevation={2}
                sx={{ maxWidth: 250, margin: "0 auto", padding: "0.1em" }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  image="data:image/png;base64,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"
                  title="looker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Looker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enterprise platform for real-time BI, data applications, and
                    embedded analytics.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://cloud.google.com/looker">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
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
              <Typography variant="h4">Login to..</Typography>

              <div className="login-button-container">
                {/* <Link href="/game">
                  <Button
                    fullHeight
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Player
                  </Button>
                </Link> */}
                <Link href="/company">
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Retail Analytics Portal
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
