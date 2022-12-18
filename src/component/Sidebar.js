import React from 'react'
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Project from '../pages/Project';
import Aboutme from '../pages/Aboutme';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./Sidebar.css";


function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="sidebar">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12} className="tab">
                <div className="tab">
                    <button onClick={() => navigate('/jignasu')} className="buton">Home</button>
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div className="tab">
                    <button onClick={() => navigate('/jignasu/resume')} className="buton">Resume</button>
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div className="tab">
                    <button onClick={() => navigate('/jignasu/project')} className="buton">Projects</button>
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div className="tab">
                    <button onClick={() => navigate('/jignasu/aboutme')} className="buton">About me</button>
                </div>
            </Grid>
        </Grid>
        </div>
    </>
  )
}

export default Sidebar