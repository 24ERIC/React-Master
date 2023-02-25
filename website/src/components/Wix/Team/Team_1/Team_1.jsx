import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './image.jpg';
import Button from '@mui/material/Button';

export default function Team_1() {
  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: "20%",
          left: "30%",
          width: '40%',
          height: '65%',
          backgroundColor: 'white',
          
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marginBottom={"10%"}>Lizard</Typography>
        <Typography variant="caption" width={"70%"} marginBottom={"10%"}>Welcome. We're efv, and we're disrupting the industry with our groundbreaking solutions and business ideas. Our technology has already been recognized by market leaders and our scalable business model is setting the trend for industry standards. Curious to find out more? Browse through our website, and get in touch if you would like to request a demo.</Typography>
        <Button variant="contained"><Typography variant="caption" >Learn More</Typography></Button>
      </CardContent>
      <CardMedia component="img" image={image} />
    </Card>
  );
}