import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button'; 
import { Grid } from '@mui/material';



export default function Contact_2() {
  return (
    <>       
      <Grid
        marginTop={"15%"}
        container
        spacing={4}
        paddingLeft="40px"
        paddingRight="40px"
        justify="center"
      >
        <Grid item xs={3} sm={3} md={3}>
          <Card1 />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Card2 />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Card3 />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Card4 />
        </Grid>
      </Grid>
    </>
  );
}


function Card1() {
  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: "-9%",
          left: "20%",
          width: '100',
          height: '30',
          backgroundColor: 'white',
          
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h4" marginBottom={"10%"}>Molaen Neak</Typography>

      </CardContent>
    </Card>
  );
}


function Card2() {
  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: "-9%",
          left: "20%",
          width: '100',
          height: '30',
          backgroundColor: 'white',
          
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h4" marginBottom={"10%"}>Molaen Neak</Typography>

      </CardContent>
    </Card>
  );
}


function Card3() {
  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: "-9%",
          left: "20%",
          width: '100',
          height: '30',
          backgroundColor: 'white',
          
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h4" marginBottom={"10%"}>Molaen Neak</Typography>

      </CardContent>
    </Card>
  );
}


function Card4() {
  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: "-9%",
          left: "20%",
          width: '100',
          height: '30',
          backgroundColor: 'white',
          
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h4" marginBottom={"10%"}>Molaen Neak</Typography>

      </CardContent>
    </Card>
  );
}

