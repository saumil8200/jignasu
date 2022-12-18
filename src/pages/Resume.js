import React from 'react'
import Education from "../component/Education";
import Name from "../component/Name";
import Bio from "../component/Bio";
import Photo from "../component/Photo";
import { Grid } from '@mui/material';
import Sidebar from "../component/Sidebar";

function Resume() {
  return (
    <>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2}>
                    <Sidebar/>
            </Grid>
            <Grid item xs={5} md={7}>
                <Education/>
            </Grid>
            <Grid item xs={5} md={3}>
                    <Photo/>
            </Grid>    
        </Grid>
    </>
  )
}

export default Resume