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



export default function Contact_3() {
  return (
    <>      
      <Grid
        marginTop={"15%"}
        container
        justify="center"
        height={"60"}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Card1 />
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Card2 />
        </Grid>
      </Grid>
    </>
  );
}


function Card1() {
  return (
    <Card 
      sc = {{
        // display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
        &ensp;&ensp;&ensp;&ensp;&ensp;&emsp;Get in Touch
        </Typography>
        <br />
        <br />
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;500 Terry Francine St.
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;San Francisco, CA 94158
        </Typography>
        <br />
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;123-456-7890
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;info@mysite.com
        </Typography>
        <br />
        <Typography textAlign={"left"} >
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&emsp;
          <FacebookIcon sx={{ fontSize: 25 }}/>
          <TwitterIcon sx={{ fontSize: 25 }}/>
          <LinkedInIcon sx={{ fontSize: 25 }}/>
          <InstagramIcon sx={{ fontSize: 25 }}/>
        </Typography>
      </CardContent>
    </Card>
  );
}

function Card2() {
  return (
    <Card 
      sc = {{
        // display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
          Contact
        </Typography>
        <br />
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          123-456-7890
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          info@mysite.com
        </Typography>
      </CardContent>
    </Card>
  );
}

function Card3() {
  return (
    <Card 
      sc = {{
        // display: 'flex',
        // maxWidth: 600,
      }}
    >
      <CardContent>
        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
          Opening Hours
        </Typography>
        <br />
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          Mon - Fri &ensp;&ensp;&ensp;8:00 am - 8:00 pm
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          Saturday &ensp;&ensp;&ensp;9:00 am - 7:00 pm
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          Sunday &ensp;&emsp;&ensp;&emsp;&emsp;&emsp;9:00 am - 9:00 pm
        </Typography>
      </CardContent>
    </Card>
  );
}

