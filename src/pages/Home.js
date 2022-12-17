import Name from "../component/Name";
import Bio from "../component/Bio";
import Photo from "../component/Photo";
import { Grid } from '@mui/material';
import Buttons from "../component/Buttons"


function Home() {
  return (
    <>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6} md={8}>
                    <Name/>
                    <Bio/>
                    <Buttons/>
            </Grid>
            <Grid item xs={6} md={4}>
                    <Photo/>
            </Grid>    
        </Grid>
    </>
        
  )
}


export default Home
