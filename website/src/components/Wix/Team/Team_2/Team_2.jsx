import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button'; 
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/material';

export default function Team_2() {
  return (
    <>
      <Introduction />
       
      <Grid
        marginTop={"15%"}
        container
        justify="center"
      >
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember1Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember11 />
        </Grid>

        {/* <Grid item xs={12} sm={4} md={6}>
          <TeamMember2 />
        </Grid>
         <Grid item xs={12} sm={6} md={6}>
          <TeamMember3 />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TeamMember4 />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TeamMember5 />
        </Grid> */}
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
        <Typography variant="h2" fontWeight={"500"} marginBottom={"2%"}>Our Team</Typography>
        <Typography variant="subtitle1" fontWeight={"1000"} marginBottom={"2%"}>Who We Are</Typography>
        <Typography variant="body2"  fontWeight={"500"} lineHeight={"1.5"} width={"72%"} marginBottom={"5%"}>We wouldn't be able to take efv to the next level without our incredible team of entrepreneurs who collaborate together to make each project come to life. Our staff runs like a well-oiled machine, offering all of our clients a smart and useful products aimed at making their lives better. Read below to learn more about the incredible efv team.</Typography>
      </CardContent>
    </Card>
  );
}












function TeamMember1Picture() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardMedia
        component="img"
        image={image5}
        // width="600"
      />
    </Card>
  );
}
function TeamMember1Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          Card Title
        </Typography>
        <Typography variant="body2" component="p">
          This is the text for the card. It can be multiple lines long and contain
          any content you want to display.
        </Typography>
      </CardContent>
    </Card>
  );
}






















// function TeamMember1() {
//   return (
//     <Card
//       sx={{
//         position: 'relative',
//       }}
//     >
//       {/* <CardContent
//         sx={{
//           position: 'absolute',
//           bottom: "-9%",
//           left: "20%",
//           width: '100',
//           height: '30',
//           backgroundColor: 'white',
          
//           // display: "flex",
//           // flexDirection: "column",
//           // justifyContent: "center",
//           // alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" marginBottom={"10%"}>Molaen Neak</Typography>

//       </CardContent> */}
//       <CardContent
//         sx={{
//           position: 'absolute',
//           bottom: "20%",
//           left: "30%",
//           width: '40%',
//           height: '65%',
//           backgroundColor: 'white',
          
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" marginBottom={"10%"}>Lizard</Typography>
//         <Typography variant="caption" width={"70%"} marginBottom={"10%"}>Welcome. We're efv, and we're disrupting the industry with our groundbreaking solutions and business ideas. Our technology has already been recognized by market leaders and our scalable business model is setting the trend for industry standards. Curious to find out more? Browse through our website, and get in touch if you would like to request a demo.</Typography>
//         <Button variant="contained"><Typography variant="caption" >Learn More</Typography></Button>
//       </CardContent>
//       <CardMedia component="img" image={image1} />
//     </Card>
//   );
// }



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


