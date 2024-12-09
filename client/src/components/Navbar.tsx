import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <AppBar position="static">
          <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}>
              <Typography variant="h4" component="div">
                Messages
              </Typography>
            </NavLink>
            <NavLink to="add-message">
              <Button style={{color: 'white'}}>
                Add new message
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;