import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Coctel = ({ nombre, metodo, ingredientes, cristaleria, garnish }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Método: {metodo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredientes: {ingredientes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cristalería: {cristaleria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Garnish: {garnish}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Coctel;