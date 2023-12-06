import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const cards = [
    {
        id: 1,
        image: 'src/assets/sistemas.jpg',
        name: 'Sistemas',
        text: 'Esta es el área encargada de la infraestructura de red y los computadores.'
    },
    {
        id: 2,
        image: 'src/assets/contabilidad.jpg',
        name: 'Contabilidad',
        text: 'Esta área soluciona todo tema monetario de la empresa, así como administrativo.'
    },
    {
        id: 3,
        image: 'src/assets/mantenimiento.jpg',
        name: 'Mantenimiento',
        text: 'En esta área se realiza la modificación de puestos de trabajo y arreglos.'
    }
];

const defaultTheme = createTheme();

export function Area() {
    const navigate = useNavigate();

    function ingresar(area){
        localStorage.setItem('area', JSON.stringify(area.id));
        return navigate("/verTickets");
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ConfirmationNumberIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Sistema de Tickets
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 7,
            pb: 5,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Seleccionar Area
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => ingresar(card)}>Seleccionar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

