import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Welcome_1 from "./Welcome_1/Welcome-1";
import Welcome_2 from "./Welcome_2/Welcome-2";
import Welcome_3 from "./Welcome_3/Welcome-3";
import Welcome_4 from "./Welcome_4/Welcome-4";


export default function Welcome() {

    return (
      <>
        <Typography variant="h2" textAlign={"center"}>
          <Button component={Link} to="/" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
          <Typography variant="h2" textAlign={"center"} fontWeight={"1000"}>Components: Welcome </Typography>
        </Typography>

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={5}>-------------------------------------Below is Welcome_1-------------------------------------</Typography>
        <Welcome_1 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={10}>-------------------------------------Below is Welcome_2-------------------------------------</Typography>
        <Welcome_2 />

        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={10}>-------------------------------------Below is Welcome_3-------------------------------------</Typography>
        <Welcome_3 />
        
        <Typography variant="h4" color={"primary"} textAlign={"center"} marginBottom={10} marginTop={10}>-------------------------------------Below is Welcome_4-------------------------------------</Typography>
        <Welcome_4 />
        
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>
          <Button component={Link} to="/" color="primary" textAlign={"center"}>
            <HomeIcon color="primary" sx={{ fontSize: 100 }}/> 
          </Button> 
        </Typography>
      </>
    );
  }
    