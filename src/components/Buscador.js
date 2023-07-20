import React, { useState } from 'react';
import { Paper, IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from '@mui/icons-material';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBuscar(busqueda.trim().toLowerCase().replace(/\s+/g, ''));
  };

  return (
    <Paper component="form" onSubmit={handleSubmit}>
      <TextField
        label="Buscar cóctel"
        value={busqueda}
        onChange={handleInputChange}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Paper>
  );
};

export default Buscador;