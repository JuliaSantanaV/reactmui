import React from "react";
import { Button, Typography, Container } from "@mui/material";
import Swal from "sweetalert2";

function ContadorEstoque() {
  // Criando o estado
  const [quantidade, setQuantidade] = React.useState(0);

  // Função convencional para aumentar
  function adicionarItem() {
    setQuantidade(quantidade + 1);
  }

  // Função convencional para diminuir com logica if/else
  function removerItem() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    } else {
      Swal.fire({
        title: "Atenção!",
        text: "Não é possível remover mais itens.",
        icon: "warning",
      });
    }
  }

  return (
    <Container>
      <Typography variant="h4">Itens no Carrinho: {quantidade}</Typography>
      <Button variant="contained" onClick={adicionarItem} sx={{ mr: 2 }}>
        {" "}
        +{" "}
      </Button>
      <Button variant="outlined" color="error" onClick={removerItem}>
        {" "}
        -{" "}
      </Button>
    </Container>
  );
}

export default ContadorEstoque;
