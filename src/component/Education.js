import React from 'react'
import "./Education.css";
import { Grid } from '@mui/material';


function Education() {
  return (
    <>
        <div className='EducationResume'>
            <h1 className='EducationTitle'>
                Education
            </h1>
        </div>
        <div>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={6} md={6}>
                <h2 className='universityName'>
                    Virginia Tech, Blacksburg
                </h2>
            </Grid>
            <Grid item xs={6} md={6}>
                <h2 className='universityTimeline'>
                    August 2021 - May 2023
                </h2>
            </Grid>
            <Grid item xs={12} md={12}>
                <h2 className='universityContent'>
                    
                </h2>
            </Grid>
        </Grid>
            
        </div>
    </>
  )
}

export default Education