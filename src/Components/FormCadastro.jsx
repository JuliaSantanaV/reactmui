import { Container, TextField, Button, Typography, Stack } from "@mui/material";

function FormCadastro() {
  function validarEmail(email) {
    let erro = false;
    if (email === "") {
      erro = true;
    }
    return erro;
  }

  return (
    <>
      <Typography variant="h5">Cadastro de Usuário</Typography>

      <Stack spacing={3} sx={{ mt: 2 }}>
        <TextField label="Nome Completo" variant="outlined" fullWidth />

        <TextField
          label="Email"
          type="email"
          error={validarEmail("")}
          helperText="O email é obrigatório"
          variant="outlined"
          fullWidth
        />

        <Button variant="contained" size="medium">
          Finalizar Cadastro
        </Button>
      </Stack>
    </>
  );
}

export default FormCadastro;
