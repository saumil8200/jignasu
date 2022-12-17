import { Grid } from '@mui/material';

function resumeClick() {
    alert('You clicked me!');
  }

  function projectsClick() {
    alert('You clicked me!');
  }

  function AboutmeClick() {
    alert('You clicked me!');
  }

function Buttons() {
  return (
    <>
    <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={4} md={2}>
            <button onClick={resumeClick}>Resume</button>;
        </Grid>
        <Grid item xs={4} md={2}>
            <button onClick={projectsClick}>Projects</button>;
        </Grid>
        <Grid item xs={4} md={2}>
            <button onClick={AboutmeClick}>About me</button>;
        </Grid>
    </Grid>
    </>
  )
}

export default Buttons