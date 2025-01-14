import React, { useState } from "react";
import { Grid, Container, Typography, ButtonGroup, Button } from "@mui/material";
import CoctelCard from "./components/CoctelCard";
import Buscador from "./components/Buscador";
import cocteles from "./server/cocteles.js";

const App = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const handleBuscar = (texto) => {
    setTextoBusqueda(texto.trim().toLowerCase()); // Normalizar el texto de búsqueda
  };

  const mostrarTodosLosCocteles = () => {
    setCategoriaSeleccionada("todos");
    setTextoBusqueda("");
  };

  const mostrarCoctelesClasicos = () => {
    setCategoriaSeleccionada("clasicos");
    setTextoBusqueda("");
  };

  const mostrarCoctelesDeAutor = () => {
    setCategoriaSeleccionada("autor");
    setTextoBusqueda("");
  };

  const filtrarYOrdenarCocteles = () => {
    // Filtrar cócteles por categoría y texto de búsqueda
    let coctelesFiltrados = cocteles.filter((coctel) => {
      // Filtrar por categoría
      if (categoriaSeleccionada !== "todos" && coctel.categoria !== categoriaSeleccionada) {
        return false;
      }
      // Filtrar por texto de búsqueda
      if (textoBusqueda && !coctel.nombre.toLowerCase().includes(textoBusqueda)) {
        return false;
      }
      return true;
    });

    // Ordenar para priorizar cócteles que empiezan con el texto buscado
    coctelesFiltrados.sort((a, b) => {
      const empiezaConTextoA = a.nombre.toLowerCase().startsWith(textoBusqueda) ? 1 : 0;
      const empiezaConTextoB = b.nombre.toLowerCase().startsWith(textoBusqueda) ? 1 : 0;

      // Si ambos empiezan o no empiezan con el texto, no cambiar el orden
      if (empiezaConTextoA === empiezaConTextoB) return 0;

      // Priorizar los que empiezan con el texto
      return empiezaConTextoB - empiezaConTextoA;
    });

    return coctelesFiltrados;
  };

  const coctelesMostrados = filtrarYOrdenarCocteles();

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Recetario de Cócteles
      </Typography>
      <Buscador onBuscar={handleBuscar} />
      <ButtonGroup sx={{ marginBottom: "16px" }}>
        <Button onClick={mostrarTodosLosCocteles}>Todos</Button>
        <Button onClick={mostrarCoctelesClasicos}>Clásicos</Button>
        <Button onClick={mostrarCoctelesDeAutor}>De Autor</Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        {coctelesMostrados.length > 0 ? (
          coctelesMostrados.map((coctel) => (
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
        ) : (
          <Typography variant="h6" align="center" sx={{ width: "100%", marginTop: "20px" }}>
            No se encontraron cócteles
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default App;
