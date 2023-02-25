import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from './image.jpg';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

export default function Welcome_1() {

  return (
    <>
      <h1>This is Welcome_1 page</h1>
      <MediaCard />

    </>
  );
}
  




function MediaCard() {
  return (
    <Box>
      <CardMedia
        component="img"
        image={image}
        />
      <Box
      sx={{
        position: 'absolute',
        bottom: "-20%",
        left: "30%",
        width: '40%',
        height: '65%',
        color: 'black',
        backgroundColor: 'white',
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

      }}
      >
        <Typography variant="h5" color={grey}>Lizard</Typography>
        <Typography variant="body2">Subtitle</Typography>
      </Box>
    </Box>
  );
}



