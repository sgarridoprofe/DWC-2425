import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "../componentes/AppAppBar";
import MainContent from "../componentes/MainContent";
import Latest from "../componentes/Latest";
import Footer from "../componentes/Footer";
import PrincipalContent from "../componentes/PrincipalContent";

export default function Principal(props) {
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
        <PrincipalContent />
        {/* <Latest /> */}
      </Container>
      {/* <Footer /> */}
    </AppTheme>
  );
}
