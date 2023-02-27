import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function Home() {

  return (
    <>
      <Typography variant="h4" component="h2" align="center" color="primary">
        Welcome to ReactMaster
      </Typography>
      <Typography variant="h6" component="h2" align="center" color="primary">
        Developed by Eric
      </Typography>
      <Typography variant="body3" component="body" align="center" color="primary">
        This project simple make your life easilier during the development of website by React and Material-UI. Multiple existing open source page components is ready for you to use at any time. Simplely copy and paste the code in the components folder into your project. That's it!
      </Typography>

      <List
        sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Components />
      </List>
    </>
  );
}


function Components() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Components" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
          <ListItemButton sx={{ pl: 4 }}>
            <Button component={Link} to="/test/welcome" color="primary">
              Welcome
            </Button>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <Button component={Link} to="/test/team" color="primary">
              Team
            </Button>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <Button component={Link} to="/test/contact" color="primary">
              Contact
            </Button>
          </ListItemButton>

        </List>
      </Collapse>
    </>
  );
}

