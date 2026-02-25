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
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";

import { categoriasDisponiveis } from "../assets/Dados/data";
import { produtosIniciais } from "../assets/Dados/dadosProdutos";

function CadastrodeProdutos() {
  const [nome, setNome] = React.useState("");
  const [categoria, setCategoria] = React.useState("");

  const [listaProdutos, setListaProdutos] = React.useState(produtosIniciais);

  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarCategoria(event) {
    setCategoria(event.target.value);
  }

  function adicionarProduto() {
    const novoItem = {
      id: Math.random(),
      nome: nome,
      categoria: categoria,
    };

    setListaProdutos([...listaProdutos, novoItem]);

    setNome("");
    setCategoria("");
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* COLUNA 1: FORMULÁRIO DE CADASTRO */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom align="center">
              Cadastrar Novo
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Nome do Produto"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={categoria}
                  onChange={mudarCategoria}
                  label="Categoria"
                >
                  {categoriasDisponiveis.map(function (cat) {
                    return (
                      <MenuItem key={cat.id} value={cat.nome}>
                        {cat.nome}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                onClick={adicionarProduto}
                disabled={nome === "" || categoria === ""}
              >
                Adicionar à Lista
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* COLUNA 2: LISTA DE PRODUTOS CADASTRADOS */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom align="center">
            Produtos no Sistema
          </Typography>
          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaProdutos.map(function (prod) {
                return (
                  <React.Fragment key={prod.id}>
                    <ListItem>
                      <ListItemText
                        primary={prod.nome}
                        secondary={"Categoria: " + prod.categoria}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastrodeProdutos;
