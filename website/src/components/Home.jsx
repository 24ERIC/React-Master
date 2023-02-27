import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Welcome from './Wix/Welcome/Welcome';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Contact from './Wix/Contact/Contact';

export default function Home() {

  return (
    <>
      <ComponentsList />
    </>
  );
}

function ComponentsList() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Components
        </ListSubheader>
      }
    >
      <WelcomeItem />
      <TeamItem />
      <ContactItem />
    </List>
  );
}

function WelcomeItem() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Welcome" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>

          <Button component={Link} to="/welcome" color="primary">
            Welcome
          </Button>

          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}


function TeamItem() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Team" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>

          <Button component={Link} to="/team" color="primary">
            Team
          </Button>

          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}


function ContactItem() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Contact" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>

          <Button component={Link} to="/contact" color="primary">
            Contact
          </Button>

          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}