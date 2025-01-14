import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    const valor = event.target.value;
    setBusqueda(valor);
    onBuscar(valor); // Llamar a la función `onBuscar` con cada cambio en el texto
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        marginBottom: '16px',
        width: '100%',
      }}
    >
      <InputBase
        placeholder="Buscar cóctel..."
        value={busqueda}
        onChange={handleInputChange}
        sx={{ marginLeft: 1, flex: 1 }}
      />
      <IconButton sx={{ padding: '10px' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Buscador;
