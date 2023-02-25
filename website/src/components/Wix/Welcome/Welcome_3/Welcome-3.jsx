import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './image.jpg';
import Button from '@mui/material/Button';


export default function Welcome_3() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container 
        pacing={4} 
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >

        
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" marginBottom={"4%"}>Lizard</Typography>
              <Typography variant="caption" width={"70%"} marginBottom={"6%"}>Welcome. We're efv, and we're disrupting the industry with our groundbreaking solutions and business ideas. Our technology has already been recognized by market leaders and our scalable business model is setting the trend for industry standards. Curious to find out more? Browse through our website, and get in touch if you would like to request a demo.</Typography>
              <Button variant="contained"><Typography variant="caption" >Learn More</Typography></Button>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={6}>
          <Card>
            <CardMedia component="img" image={image}/>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}