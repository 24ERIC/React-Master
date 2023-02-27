import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';


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
    <Card>
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
          &emsp;
          <TwitterIcon sx={{ fontSize: 25 }}/>
          &emsp;
          <LinkedInIcon sx={{ fontSize: 25 }}/>
          &emsp;
          <InstagramIcon sx={{ fontSize: 25 }}/>
        </Typography>
      </CardContent>
    </Card>
  );
}


function Card2() {
  return (
    <Card>
      <CardContent>
        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue=""
          />
          &ensp;&ensp;
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />
        </Typography>
        <br />

        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2" >
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            style={{ width: 650 }}
          />
        </Typography>
        <br />

        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
          <TextField
            required
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            style={{ width: 650 }}
          />
        </Typography>
        <br />

        <Button variant="contained" >
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          Send
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        </Button>
        <Typography textAlign={"left"}  style={{ fontSize: 13 }} fontWeight={"900"} >
          Thanks for submitting!
        </Typography>
      </CardContent>
    </Card>
  );
}