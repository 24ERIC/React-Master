import Team_1 from "./Team_1/Team_1";
import Team_2 from "./Team_2/Team_2";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Team() {

    return (
      <>
        <Typography variant="h2" textAlign={"center"}> Components: Team</Typography>
        <Button component={Link} to="/" color="primary">Home</Button>

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>Below is Team_1</Typography>
        <Team_1 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={5}>Below is Team_2</Typography>
        <Team_2 />
      </>
    );
  }
    