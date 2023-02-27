import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';


export default function Team_2() {
  return (
    <>
      <Introduction />
       
      <Grid marginTop={"15%"} container justify="center">
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember1Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember1Text />
        </Grid>

        
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember2Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember2Text />
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <TeamMember3Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember3Text />
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <TeamMember4Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember4Text />
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <TeamMember5Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember5Text />
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <TeamMember6Picture />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TeamMember6Text />
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
        image={image1}
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
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>

      </CardContent>
    </Card>
  );
}


function TeamMember2Picture() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardMedia
        component="img"
        image={image2}
        // width="600"
      />
    </Card>
  );
}


function TeamMember2Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}


function TeamMember3Picture() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardMedia
        component="img"
        image={image3}
        // width="600"
      />
    </Card>
  );
}


function TeamMember3Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}


function TeamMember4Picture() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardMedia
        component="img"
        image={image4}
        // width="600"
      />
    </Card>
  );
}


function TeamMember4Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}


function TeamMember5Picture() {

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


function TeamMember5Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}


function TeamMember6Picture() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardMedia
        component="img"
        image={image6}
        // width="600"
      />
    </Card>
  );
}


function TeamMember6Text() {

  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <br />
        <Typography variant="h6" component="h2">
          Co-Founder & Partner
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={"800"}>
          Taylor Quill
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="subtitle" component="p">
          info@mysite.com
        </Typography>
        <br />
        <Typography variant="body3" component="p">
          123-456-7890
        </Typography>
        <Typography variant="body3" component="p">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}