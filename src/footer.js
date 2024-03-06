import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, LinkedIn, Email } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="https://www.sitpune.edu.in/student-club" color="inherit" sx={{ color: 'text.secondary' }}>
              Student Club
            </Link>
            <br />
            <Link href="https://developers.google.com/community-guidelines" color="inherit" sx={{ color: 'text.secondary' }}>
              Community Guidelines
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
           
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link
                href="https://gdsc.community.dev/symbiosis-institute-of-technology-pune/"
                color="inherit"
                sx={{ pr: 1, color: 'text.secondary' }}
              >
                Join Us
              </Link>
              <Link
                href="https://www.instagram.com/gdsc_sit/"
                color="inherit"
                sx={{ pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link
                href="mailto:gdsc@sitpune.edu.in"
                color="inherit"
                sx={{ pr: 1, color: 'text.secondary' }}
              >
                <Email />
              </Link>
              <Link
                href="https://www.linkedin.com/company/gdsc-sit-pune/mycompany/"
                color="inherit"
                sx={{ color: 'text.secondary' }}
              >
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          
        </Box>
      </Container>
    </Box>
  );
}
