import React, { useState } from 'react';
import { Grid, Container, Typography, ButtonGroup, Button } from '@mui/material';
import CoctelCard from './components/CoctelCard';
import Buscador from './components/Buscador';
import cocteles from './server/cocteles';

const App = () => {
  const [coctelBuscado, setCoctelBuscado] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  const buscarCoctel = (nombre) => {
    const coctelEncontrado = cocteles.find(
      (coctel) => coctel.nombre.toLowerCase().replace(/\s+/g, '') === nombre
    );

    setCoctelBuscado(coctelEncontrado);
  };

  const mostrarTodosLosCocteles = () => {
    setCategoriaSeleccionada('todos');
    setCoctelBuscado(null);
  };

  const mostrarCoctelesClasicos = () => {
    setCategoriaSeleccionada('clasicos');
    setCoctelBuscado(null);
  };

  const mostrarCoctelesDeAutor = () => {
    setCategoriaSeleccionada('autor');
    setCoctelBuscado(null);
  };

  const filtrarCoctelesPorCategoria = (coctel) => {
    if (categoriaSeleccionada === 'todos') {
      return true;
    }

    return coctel.categoria === categoriaSeleccionada;
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Recetario de Cócteles
      </Typography>
      <Buscador onBuscar={buscarCoctel} />
      <ButtonGroup sx={{ marginBottom: '16px' }}>
        <Button onClick={mostrarTodosLosCocteles}>Todos</Button>
        <Button onClick={mostrarCoctelesClasicos}>Clásicos</Button>
        <Button onClick={mostrarCoctelesDeAutor}>De Autor</Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        {coctelBuscado ? (
          <Grid item xs={12}>
            <CoctelCard
              nombre={coctelBuscado.nombre}
              metodo={coctelBuscado.metodo}
              ingredientes={coctelBuscado.ingredientes}
              cristaleria={coctelBuscado.cristaleria}
              garnish={coctelBuscado.garnish}
              imagen={coctelBuscado.imagen}
            />
          </Grid>
        ) : (
          cocteles
            .filter(filtrarCoctelesPorCategoria)
            .map((coctel) => (
              <Grid item xs={12} sm={6} md={4} key={coctel.nombre}>
                <CoctelCard
                  nombre={coctel.nombre}
                  metodo={coctel.metodo}
                  ingredientes={coctel.ingredientes}
                  cristaleria={coctel.cristaleria}
                  garnish={coctel.garnish}
                  imagen={coctel.imagen}
                />
              </Grid>
            ))
        )}
      </Grid>
    </Container>
  );
};

export default App;