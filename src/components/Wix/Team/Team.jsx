import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Team_1 from "./Team_1/Team_1";
import Team_2 from "./Team_2/Team_2";


export default function Team() {

    return (
      <>
        <Typography variant="h2" textAlign={"center"}>
          <Button component={Link} to="/test" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
          <Typography variant="h2" textAlign={"center"} fontWeight={"1000"}>Components: Team </Typography>
        </Typography>

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >----------------------------------------Below is Team_1----------------------------------------</Typography>
        <Team_1 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5} >----------------------------------------Below is Team_2----------------------------------------</Typography>
        <Team_2 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>
          <Button component={Link} to="/test" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
        </Typography>
        
      </>
    );
  }
    