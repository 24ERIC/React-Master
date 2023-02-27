import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function Contact_2() {
  return (
    <>       
      <Typography textAlign={"center"} variant="h3" fontWeight={"800"} component="h2">
        Get in Touch
      </Typography>
      <Grid
        marginTop={"15%"}
        container
        spacing={4}
        paddingLeft="40px"
        paddingRight="40px"
        justify="center"
      >
        <Grid item xs={4} sm={4} md={4}>
          <Card1 />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card2 />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card3 />
        </Grid>
      </Grid>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7976443938746!2d-79.66487278439928!3d43.54825987912511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43e3135af203%3A0x713c168866b9f492!2sUniversity%20of%20Toronto%20Mississauga!5e0!3m2!1sen!2sca!4v1677463416078!5m2!1sen!2sca" width="1440" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}


function Card1() {
  return (
    <Card>
      <CardContent>
        <Typography textAlign={"left"} variant="h5" fontWeight={"900"} component="h2">
        &ensp;&ensp;&emsp;Address
        </Typography>
        <br />
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;500 Terry Francine St.
        </Typography>
        <Typography textAlign={"left"} variant="body2" fontWeight={"500"} component="h2">
          &ensp;&ensp;&ensp;&ensp;San Francisco, CA 94158
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
    <Card>
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