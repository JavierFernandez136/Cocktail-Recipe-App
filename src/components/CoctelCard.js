import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  border: '1px solid #ccc',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
  marginBottom: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const CoctelCardContent = styled(CardContent)({
  flexGrow: 1,
});

const CoctelCardImage = styled('img')({
  marginBottom: '16px',
  width: '100%',
  objectFit: 'contain',
  maxHeight: '200px',
  objectPosition: 'center',
});

const CoctelCard = ({ nombre, metodo, ingredientes, cristaleria, garnish, imagen }) => {
  return (
    <Grid item xs={12} sm={6} md={4} style={{ padding: '8px', maxWidth: '100%' }}>
      <StyledCard>
        <CoctelCardImage src={process.env.PUBLIC_URL + imagen} alt={nombre} /> {/* Uso de process.env.PUBLIC_URL */}
        <CoctelCardContent>
          <Typography variant="h5" component="div" align="center">
            {nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Método: {metodo}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {/* Uso del componente Typography con component="div" para mostrar los ingredientes en distintas líneas */}
            Ingredientes:
            <ul style={{ margin: '8px 0', paddingInlineStart: '20px' }}>
              {ingredientes.split(',').map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cristalería: {cristaleria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Garnish: {garnish}
          </Typography>
        </CoctelCardContent>
      </StyledCard>
    </Grid>
  );
};

export default CoctelCard;