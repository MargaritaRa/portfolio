import React from 'react';
import { Container, Typography, Chip, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';


import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        Companies I've Worked With
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        I have had the opportunity to work with a diverse group of companies. Some of the notable companies include:
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={3}><img src="/image/contiki.png" alt="Contiki" style={{ width: '100%' }} /></Grid>
        <Grid item xs={6} sm={3}><img src="/image/synchrony.png" alt="Synchrony" style={{ width: '100%' }} /></Grid>
        <Grid item xs={6} sm={3}><img src="/image/ocps.png" alt="OCPS" style={{ width: '100%' }} /></Grid>
        <Grid item xs={6} sm={3}><img src="/image/CG.png" alt="C&G Auto Center" style={{ width: '100%' }} /></Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" color="primary">EDUCATION</Typography>
          <Box sx={{ p: 2, backgroundColor: 'rgb(230, 133, 6)', borderRadius: '8px' }}>
            <Typography>🌙 2024: Flatiron — Software Engineering</Typography>
            <Typography>🌙 2013-2016: UCF — Mathematics Education</Typography>
            <Typography>🌙 2011-2013: Valencia — AA General</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" color="primary">EXPERIENCE</Typography>
          <Box sx={{ p: 2, backgroundColor: 'rgb(230, 133, 6)', borderRadius: '8px' }}>
            <Typography>🌙 2023-2024: Contiki — Tour Manager in Japan</Typography>
            <Typography>🌙 2019-2023: Synchrony — Supervisor in Recovery</Typography>
            <Typography>🌙 2018-2019: OCPS — Math Teacher</Typography>
            <Typography>🌙 2016-2018: C&G Auto Center — Bookkeeper</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" color="primary">TECHNICAL SKILLS</Typography>
        <Typography align="center" variant="body2" gutterBottom>
          Coding Skills: Basic knowledge of HTML, CSS, JavaScript, Python, SQL
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Chip label="#Packaging" sx={{ m: 1 }} />
          <Chip label="#UI/UX Design" sx={{ m: 1 }} />
          <Chip label="#User Research" sx={{ m: 1 }} />
          <Chip label="#Virtual Design" sx={{ m: 1 }} />
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" color="primary">HOBBIES & INTERESTS</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <AirplanemodeActiveIcon fontSize="large" />
            <Typography align="center">Traveling</Typography>
          </Grid>
          <Grid item>
            <LibraryBooksIcon fontSize="large" />
            <Typography align="center">Reading</Typography>
          </Grid>
          <Grid item>
            <FamilyRestroomIcon fontSize="large" />
            <Typography align="center">Family</Typography>
          </Grid>
          <Grid item>
            <PetsIcon fontSize="large" />
            <Typography align="center">Dog mom</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;