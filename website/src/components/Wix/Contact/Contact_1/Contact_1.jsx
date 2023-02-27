import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button'; 
import { Grid } from '@mui/material';



export default function Team_1() {
  return (
    <>
      <Introduction />
       
      <Grid
        marginTop={"15%"}
        container
        spacing={4}
        paddingLeft="40px"
        paddingRight="40px"
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember1 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember2 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember3 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember4 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember5 />
        </Grid>
      </Grid>
    </>
  );
}


function Introduction() {

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
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
        <Typography variant="h2" marginBottom={"2%"}>Super Super Team</Typography>
        <Typography variant="caption" width={"70%"} marginBottom={"10%"}>Welcome. We're Super Super, and we're disrupting the industry with our groundbreaking solutions and business ideas. Our technology has already been recognized by market leaders and our scalable business model is setting the trend for industry standards. Curious to find out more? Browse through our website, and get in touch if you would like to request a demo.</Typography>
        <Button variant="contained"><Typography variant="caption" >Learn More</Typography></Button>
      </CardContent>
      {/* <CardMedia component="img" image={image} /> */}
    </Card>
  );
}

function TeamMember1() {
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
      <CardMedia component="img" image={image1} />
    </Card>
  );
}



function TeamMember2() {
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
      <CardMedia component="img" image={image2} />
    </Card>
  );
}



function TeamMember3() {
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
      <CardMedia component="img" image={image3} />
    </Card>
  );
}



function TeamMember4() {
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
      <CardMedia component="img" image={image4} />
    </Card>
  );
}



function TeamMember5() {
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
      <CardMedia component="img" image={image1} />
    </Card>
  );
}


