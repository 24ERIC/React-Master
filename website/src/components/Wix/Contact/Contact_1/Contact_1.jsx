import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button'; 
import { Grid } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Contact_1() {
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
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"center"}><PlaceIcon /></Typography>

        <Typography textAlign={"center"} variant="body1" fontWeight={"800"} component="h2">
          Address
        </Typography>
        <br />
        <Typography textAlign={"center"} variant="body2" fontWeight={"600"} component="h2">
          500 Terry Francine St.
        </Typography>
        <Typography textAlign={"center"} variant="body2" fontWeight={"600"} component="h2">
          San Francisco, CA 94158
        </Typography>
      </CardContent>
    </Card>
  );
}


function Card2() {
  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"center"}><PhoneIcon /></Typography>

        <Typography textAlign={"center"} variant="body1" fontWeight={"800"} component="h2">
          Phone
        </Typography>
        <br />
        <Typography textAlign={"center"} variant="body2" fontWeight={"600"} component="h2">
        123-456-7890
        </Typography>
      </CardContent>
    </Card>
  );
}


function Card3() {
  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"center"}><EmailIcon /></Typography>

        <Typography textAlign={"center"} variant="body1" fontWeight={"800"} component="h2">
          Address
        </Typography>
        <br />
        <Typography textAlign={"center"} variant="body2" fontWeight={"600"} component="h2">
          info@mysite.com
        </Typography>
      </CardContent>
    </Card>
  );
}


function Card4() {
  return (
    <Card 
      sc = {{
        display: 'flex',
        maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"center"}><ThumbUpIcon /></Typography>

        <Typography textAlign={"center"} variant="body1" fontWeight={"800"} component="h2">
          Connect
        </Typography>
        <br />
        <Typography textAlign={"center"} >
          <FacebookIcon sx={{ fontSize: 25 }}/>
          <TwitterIcon sx={{ fontSize: 25 }}/>
          <LinkedInIcon sx={{ fontSize: 25 }}/>
          <InstagramIcon sx={{ fontSize: 25 }}/>
        </Typography>
      </CardContent>
    </Card>
  );
}

