import * as React from 'react';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Title from './Title';


const estados = [
  {
    id: 1,
    name: 'Pendiente',
  },
  {
    id: 2,
    name: 'Terminado',
  },
  {
    id: 3,
    name: 'Impedimento',
  },
];

export default function Tickets() {
  const [tickets, setTickets] = useState(() => {
    const storedData = localStorage.getItem('dataTickets');
    let data = storedData ? JSON.parse(storedData) : [];

    const areaData = localStorage.getItem('area');
    const area = JSON.parse(areaData);
  
    return data.filter((ticket) => ticket.area == area);
  });

  console.log(tickets);
  return (
    <React.Fragment>
      <Title> Tickets </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Asignador</TableCell>
            <TableCell>Tecnico</TableCell>
            <TableCell>Observaciones</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.asignador}</TableCell>
              <TableCell>{ticket.tecnico}</TableCell>
              <TableCell>{ticket.observacion}</TableCell>
              <TableCell>{ticket.estado}</TableCell>
              <TableCell> 
                <EditIcon  sx={{color:"warning.main",mx: 1}} />
                <DeleteIcon sx={{color:"error.main"}} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
