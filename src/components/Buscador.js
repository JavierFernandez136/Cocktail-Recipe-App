import React, { useState } from 'react';

import { Paper, IconButton } from "@mui/material";
import {Search} from '@mui/icons-material';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBuscar(busqueda);
  };

  return (
    <Paper onSubmit={handleSubmit}>
      <input
        label="Buscar cóctel"
        value={busqueda}
        onChange={handleInputChange}
        variant="outlined"
      >
      </input>
      <IconButton type="submit" sx={{
          p:'10px',color:'grey'
        }}>
          <Search/>
        </IconButton>
    </Paper>
  );
};

export default Buscador;