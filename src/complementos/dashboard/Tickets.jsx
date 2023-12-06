import * as React from 'react';
import { useState, useEffect  } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Title from './Title';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';

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
  const [tickets, setTickets] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [estadoSelected, setestadoSelected] = useState(1);

  const handleChange = (event) => {
    setestadoSelected(event.target.value);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('dataTickets');
    let data = storedData ? JSON.parse(storedData) : [];

    const areaData = localStorage.getItem('area');
    const area = JSON.parse(areaData);
  
    setTickets(data.filter((ticket) => ticket.area == area));
  }, []);

  function eliminarTicket(ticketId){
    const data = localStorage.getItem('dataTickets');
    const tickets = JSON.parse(data);

    const posicionTicket = tickets.findIndex(ticket => ticket.id === ticketId);

    tickets.splice(posicionTicket, 1);
    
    localStorage.setItem('dataTickets', JSON.stringify(tickets));

    const areaData = localStorage.getItem('area');
    const area = JSON.parse(areaData);

    const ticketsFiltered = tickets.filter((ticket) => ticket.area == area)
    setTickets([...ticketsFiltered]);
  }

  function actualizar(ticket, estadoSelected) {
    console.log(estadoSelected);
    const data = localStorage.getItem('dataTickets');
    const tickets = JSON.parse(data);

    const posicionTicket = tickets.findIndex(ticket => ticket.id === ticket.id);

    const ticketModified = {
      ...ticket, estado: estadoSelected
    };

    tickets.splice(posicionTicket, 1, ticketModified);
    
    localStorage.setItem('dataTickets', JSON.stringify(tickets));

    const areaData = localStorage.getItem('area');
    const area = JSON.parse(areaData);

    const ticketsFiltered = tickets.filter((ticket) => ticket.area == area)
    setTickets([...ticketsFiltered]);

    setIsEdit(false);
  }

  const editar = () => {
    if (isEdit == false) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };

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
              {isEdit ? <TableCell>
                        <Select
                          required
                          labelId="estadoSelect"
                          id="estadoSelect"
                          name="estadoSelect"
                          label="Estado"
                          value={estadoSelected}
                          onChange={handleChange}
                        >
                          {estados.map((estado) => (
                            <MenuItem value={estado.name}>{estado.name}</MenuItem>
                          ))}
                        </Select>
              </TableCell> : <TableCell>{ticket.estado}</TableCell>}
              <TableCell>
                {isEdit ? 
                  <IconButton onClick={() => actualizar(ticket, estadoSelected)}>
                    <CheckIcon sx={{color:"warning.main"}} />
                  </IconButton>
                  : 
                  <IconButton onClick={editar}>
                    <EditIcon sx={{color:"warning.main"}} /> 
                  </IconButton>
                }
                <IconButton onClick={() => eliminarTicket(ticket.id)}>
                  <DeleteIcon sx={{color:"error.main"}} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
