import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/verTickets">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Ver Tickets" />
    </ListItemButton>
    <ListItemButton component={Link} to="/crearTicket">
      <ListItemIcon>
        <NoteAddRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Crear Tickets" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItemButton>
  </React.Fragment>
);
