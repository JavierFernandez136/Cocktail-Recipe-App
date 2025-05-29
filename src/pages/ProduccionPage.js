import React, { useState } from 'react';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import produccionData from '../server/produccion';
import Header from '../components/Header';
import Buscador from '../components/Buscador';

const ProduccionPage = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = (texto) => {
    setTextoBusqueda(texto.trim().toLowerCase());
  };

  const filtrarYOrdenarProduccion = () => {
    const palabrasBusqueda = textoBusqueda.split(' ').filter(Boolean); // Separar palabras del input

    let filtrados = produccionData.filter((item) => {
      const nombreItem = item.nombre.toLowerCase();

      // Que todas las palabras del input estén presentes en el nombre
      return palabrasBusqueda.every((palabra) => nombreItem.includes(palabra));
    });

    // Ordenar priorizando los que comienzan con el texto completo (opcional)
    filtrados.sort((a, b) => {
      const empiezaA = a.nombre.toLowerCase().startsWith(textoBusqueda) ? 1 : 0;
      const empiezaB = b.nombre.toLowerCase().startsWith(textoBusqueda) ? 1 : 0;
      return empiezaB - empiezaA;
    });

    return filtrados;
  };

  const produccionMostrada = filtrarYOrdenarProduccion();

  return (
    <>
      <Header />
      <Container sx={{ marginTop: '24px' }}>
        <Box sx={{ marginBottom: '16px' }}>
        <Buscador onBuscar={handleBuscar} placeholder="Buscar Produ..." />
        </Box>

        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: '2rem', marginBottom: '20px' }}
        >
          Recetario de Producción
        </Typography>

        <Divider sx={{ marginBottom: '20px' }} />

        <Grid container spacing={2}>
          {produccionMostrada.length > 0 ? (
            produccionMostrada.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
  <Box
    sx={{
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: 3,
      bgcolor: '#fff',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 6,
      },
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    {item.imagen && (
      <img
        src={process.env.PUBLIC_URL + item.imagen}
        alt={item.nombre}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
    )}
    <Box sx={{ padding: 2, flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        {item.nombre}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
        <strong>Ingredientes:</strong> {item.ingredientes}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Preparación:</strong> {item.instrucciones}
      </Typography>
    </Box>
  </Box>
</Grid>

            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ width: '100%' }}>
              No se encontraron productos de producción.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ProduccionPage;

