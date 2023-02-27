import Team_1 from "./Contact_1/Team_1";
import Team_2 from "./Team_2/Team_2";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


export default function Team() {

    return (
      <>
        <Typography variant="h2" textAlign={"center"}>
          <Button component={Link} to="/" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
          <Typography variant="h2" textAlign={"center"} fontWeight={"1000"}>Components: Contact </Typography>
        </Typography>

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >--------------------------------------Below is Contact_1--------------------------------------</Typography>
        <Team_1 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >--------------------------------------Below is Contact_2--------------------------------------</Typography>
        <Team_2 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>
          <Button component={Link} to="/" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
        </Typography>
        
      </>
    );
  }
    