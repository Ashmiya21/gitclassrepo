import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/system'
import React from 'react'

function Seven() {
    return (
                // <Box>
                //     <Grid>
                //         <Grid container style={{ height: "auto", width: "100%", backgroundColor: "Black", display: "flex", justifyContent: "center", alignItems: "center" }}>
                //             <Grid item style={{ height: "200px", backgroundColor: "Blue" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //             <Grid item style={{ height: "200px", backgroundColor: "Red" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //             <Grid item style={{ height: "200px", backgroundColor: "Yellow" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //             <Grid item style={{ height: "200px", backgroundColor: "Purple" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //             <Grid item style={{ height: "200px", backgroundColor: "orange" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //             <Grid item style={{ height: "200px", backgroundColor: "Aqua" }} size={{ xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }}>
                //             </Grid>
                //         </Grid>
                //     </Grid>
                // </Box>
                <>
          <Box>      
        <Grid container spacing={2} sx={{ backgroundColor: "black",height:"100px", color: "white"}}>
            <Grid item size={{xl: 2, lg: 3, md: 4, sm: 6, sx: 10 }} sx={{
                    display: "flex", 
                  
                }}>
            
                <Typography variant="h5">Bloom</Typography>
            </Grid>

             
            
        </Grid>
</Box> 
<Box>
  <Grid
    container 
    sx={{
      height: "auto",
      backgroundColor: "#cdf0f0",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    
    }}
  >
    
    <Grid item size={{xl: 2, lg: 3, md: 4, sm: 6, xs: 10 }} sx={{ height: 200, bgcolor: "#808284"}} />
    <Grid item size={{xl: 2, lg: 3, md: 4, sm: 6, xs: 10 }} sx={{ height: 200, bgcolor: "#c9dafc" }} />
  </Grid>
</Box>
<Box>
  <Grid
    container
    sx={{
      height: "auto",
      backgroundColor: "#f5d1d1",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    
    }}
  >
    
    <Grid item size={{xl: 4, lg: 3, md: 4, sm: 4, xs: 12 }} sx={{ height: 200, bgcolor: "#46484b"}} />
    <Grid item size={{xl: 4, lg: 3, md: 4, sm: 4, xs: 12 }} sx={{ height: 200, bgcolor: "#d3f894" }} />
     <Grid item size={{xl:4, lg: 3, md: 4, sm: 4, xs: 12 }} sx={{ height: 200, bgcolor: "#f1b4e9"}} />
  </Grid>
</Box>
<Box>
  <Grid
    container
    sx={{
      height: "200px",
      backgroundColor: "#dfe3c4",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    
    }}
  >
    <Grid item size={{xl: 3, lg: 3, md: 4, sm: 6, xs: 10 }} sx={{ height: 100, bgcolor: "#838485"}} />
    
  </Grid>
</Box>
<Box>
  <Grid
    container
    sx={{
      height: "100px",
      backgroundColor: "#000000",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
   
    }}
  >
  </Grid>
</Box>

</>
    )
}

export default Seven

