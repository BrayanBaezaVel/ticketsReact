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
  const [estadoSelected, setestadoSelected] = useState(1);
  const [area, setArea] = useState();

  const handleChange = (event) => {
    setestadoSelected(event.target.value);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('dataTickets');
    let data = storedData ? JSON.parse(storedData) : [];

    const areaData = localStorage.getItem('area');
    const sessionArea = JSON.parse(areaData);
  
    setArea(sessionArea);

    data.map(d => {
      d.editar = false;
      return d
    });
  
    setTickets([...data]);
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

  async function actualizar(index, estadoSelected) {
    tickets[index].editar = false;
    tickets[index].estado = estadoSelected;

    setTickets([...tickets]);

    localStorage.setItem('dataTickets', JSON.stringify(tickets));
  }

  const editar = (index) => {
    let data = tickets.map(d => {
      d.editar = false;
      return d;
    })

    setTickets([...data]);

    tickets[index].editar = true;

    setTickets([...tickets]);
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
          {tickets.map((ticket, i) => {
              if (ticket.area == area) {
                return (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.asignador}</TableCell>
                    <TableCell>{ticket.tecnico}</TableCell>
                    <TableCell>{ticket.observacion}</TableCell>
                    {!ticket.editar ? <TableCell>{ticket.estado}</TableCell> : 
                    <TableCell>
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
                    </TableCell>}
                    <TableCell>
                      {ticket.editar ? 
                        <IconButton onClick={() => actualizar(i, estadoSelected)}>
                          <CheckIcon sx={{color:"warning.main"}} />
                        </IconButton>
                        : 
                        <IconButton onClick={() => editar(i)}>
                          <EditIcon sx={{color:"warning.main"}} /> 
                        </IconButton>
                      }
                      <IconButton onClick={() => eliminarTicket(ticket.id)}>
                        <DeleteIcon sx={{color:"error.main"}} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }
            })
          }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
