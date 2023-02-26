import Welcome_1 from "./Welcome_1/Welcome-1";
import Welcome_2 from "./Welcome_2/Welcome-2";
import Welcome_3 from "./Welcome_3/Welcome-3";
import Welcome_4 from "./Welcome_4/Welcome-4";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Welcome() {

    return (
      <>
      <Typography variant="h2" textAlign={"center"}>
          <Button component={Link} to="/" color="primary">
            <Typography variant="h2" textAlign={"center"}>
              Home 
            </Typography>
          </Button> 
          - Components: Welcome
        </Typography>

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>Below is Welcome_1</Typography>
        <Welcome_1 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>Below is Welcome_2</Typography>
        <Welcome_2 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>Below is Welcome_3</Typography>
        <Welcome_3 />
        
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>Below is Welcome_4</Typography>
        <Welcome_4 />
        
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>
          Go Back - 
          <Button component={Link} to="/" color="primary">
            <Typography variant="h4" textAlign={"center"}>
              Home
            </Typography>
          </Button>
        </Typography>
      </>
    );
  }
    