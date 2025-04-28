import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import ProductosContent from "../componentes/ProductosContent";
import ItemGrid from "../componentes/ItemGrid";

function Productos(props) {
  console.log("Principal", "Renderizando Principal");
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {/* <AppAppBar /> */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <ItemGrid></ItemGrid>
        {/* <ProductosContent /> */}
        {/* <Latest /> */}
      </Container>
      {/* <Footer /> */}
    </AppTheme>
  );
}

export default Productos;
