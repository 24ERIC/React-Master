import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './image.png';
import Button from '@mui/material/Button';

export default function Welcome_2() {
  return (
    <Card
      sx={{
        position: 'relative',
        background: 'red',

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          width: '60%',
          height: '65%',
          background: 'transparent', 
          boxShadow: 'none',
          
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" marginBottom={"2%"}>Lizard</Typography>
        <Typography variant="caption" width={"70%"} marginBottom={"10%"}>Welcome. We're efv, and we're disrupting the industry with our groundbreaking solutions and business ideas. Our technology has already been recognized by market leaders and our scalable business model is setting the trend for industry standards. Curious to find out more? Browse through our website, and get in touch if you would like to request a demo.</Typography>
        <Button variant="contained"><Typography variant="caption" >Learn More</Typography></Button>
      </CardContent>
      <CardMedia component="img" image={image} />
    </Card>
  );
}