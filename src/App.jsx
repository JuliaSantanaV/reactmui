import { Container, Paper, Typography, Box } from "@mui/material";
import FormCadastro from "./Components/FormCadastro";
import FormPreferencias from "./Components/FormPreferencias";
import FormConfiguracoes from "./Components/FormConfiguracoes";
import Quantidade from "./Components/Quantidade";
import CadastrodeProdutos from "./Components/CadastroProdutos";

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <FormCadastro />
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Quantidade />
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <FormPreferencias />
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <FormConfiguracoes />
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <CadastrodeProdutos />
      </Paper>
    </Container>
  );
}

export default App;
