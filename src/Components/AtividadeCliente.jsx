import React from "react";
import {
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";
import { estadosDisponiveis } from "../assets/Dados/estados";
import { clientesIniciais } from "../assets/Dados/clientesiniciais";

function AtividadeCliente() {
  const [nome, setNome] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [listaClientes, setListaClientes] = React.useState(clientesIniciais);

  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarEstado(event) {
    setEstado(event.target.value);
  }

  function adicionarCliente() {
    const novoItem = {
      id: Math.random(),
      nome: nome,
      estado: estado,
    };

    setListaClientes([...listaClientes, novoItem]);

    setNome("");
    setEstado("");
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom align="center">
              Cadastro de Clientes
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Nome do Cliente"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select value={estado} onChange={mudarEstado} label="Estado">
                  {estadosDisponiveis.map((cat) => (
                    <MenuItem key={cat.id} value={cat.nome}>
                      {cat.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                onClick={adicionarCliente}
                disabled={nome === "" || estado === ""}
                sx={{
                  backgroundColor: "#9c27b0",
                  "&:hover": {
                    backgroundColor: "#7b1fa2",
                  },
                  alignSelf: "center",
                  width: "70%",
                }}
              >
                Cadastrar Cliente
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom align="center">
            Lista de Clientes Cadastrados
          </Typography>
          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaClientes.map((cliente) => (
                <React.Fragment key={cliente.id}>
                  <ListItem>
                    <ListItemText
                      primary={cliente.nome}
                      secondary={"Estado: " + cliente.estado}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AtividadeCliente;
