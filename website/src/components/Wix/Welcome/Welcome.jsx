import Welcome_1 from "./Welcome_1/Welcome-1";
import Welcome_2 from "./Welcome_2/Welcome-2";
import Typography from '@mui/material/Typography';

export default function Welcome() {

    return (
      <>
        <Typography variant="h4" textAlign={"center"}>Components: Welcome</Typography>

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>This is Welcome_1</Typography>
        <Welcome_1 />

        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>This is Welcome_2</Typography>
        <Welcome_2 />
        
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>This is Welcome_2</Typography>
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>This is Welcome_2</Typography>
        <Typography variant="h4" textAlign={"center"} marginBottom={10} marginTop={10}>This is Welcome_2</Typography>
      </>
    );
  }
    