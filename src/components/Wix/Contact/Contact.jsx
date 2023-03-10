import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Contact_1 from './Contact_1/Contact_1';
import Contact_2 from './Contact_2/Contact_2';
import Contact_3 from './Contact_3/Contact_3';


export default function Contact() {

    return (
      <>
        <Typography variant="h2" textAlign={"center"}>
          <Button component={Link} to="/React-Master" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
          <Typography variant="h2" textAlign={"center"} fontWeight={"1000"}>Components: Contact </Typography>
        </Typography>

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >--------------------------------------Below is Contact_1--------------------------------------</Typography>
        <Contact_1 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >--------------------------------------Below is Contact_2--------------------------------------</Typography>
        <Contact_2 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >--------------------------------------Below is Contact_3--------------------------------------</Typography>
        <Contact_3 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>
          <Button component={Link} to="/React-Master" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
        </Typography>
      </>
    );
  }
    