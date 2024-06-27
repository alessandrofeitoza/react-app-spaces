import * as React from 'react';
import {AppBar, Drawer, Divider} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import "./styles.scss";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuLateral, setMenuLateral] = React.useState(false);

  const handleMenuLateral = () => {
    setMenuLateral(!menuLateral);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={menuLateral} onClose={handleMenuLateral}>
         LOGO
         <Divider/>
         <MenuList>
            <MenuItem LinkComponent={<Link to="/"/>}>
                <ListItemText>Home</ListItemText>
            </MenuItem>

            <MenuItem LinkComponent={<Link to="/salas"/>}>
                <ListItemText>Salas</ListItemText>
            </MenuItem>
         </MenuList>
      </Drawer>  

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuLateral}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
