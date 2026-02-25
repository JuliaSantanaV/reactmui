import React from "react";
import { Typography } from "@mui/material";

function ExemploUseState() {
  const [numero, setNumero] = React.useState(0);
  function aumentar() {
    setNumero(numero + 1);
  }
  return (
    <div>
      <Typography variant="h4">Contagem: {numero}</Typography>
      <button onClick={aumentar}>Aumentar Número</button>
    </div>
  );
}

export default ExemploUseState;
