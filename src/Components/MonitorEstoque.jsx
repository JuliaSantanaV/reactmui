import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

function MonitorEstoque() {
  const [quantidade, setQuantidade] = React.useState(0);

  // O VIGIA (useEffect)
  React.useEffect(
    function () {
      if (quantidade === 0) {
        Swal.fire({
          title: "Estoque Esgotado!",
          text: "Não há mais unidades disponíveis.",
          icon: "warning",
        });
      }
    },
    [quantidade],
  ); // O vigia só olha para a variável 'quantidade'

  function vender() {
    setQuantidade(quantidade - 1);
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography>Total: {quantidade}</Typography>
      <Button variant="contained" color="secondary" onClick={vender}>
        Vender 1 Unidade
      </Button>
    </Box>
  );
}
export default MonitorEstoque;
