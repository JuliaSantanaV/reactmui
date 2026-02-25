import React from "react";
import { Typography } from "@mui/material";

function ExemploEffect() {
  const [status, setStatus] = React.useState("Carregando...");

  React.useEffect(function () {
    setTimeout(function () {
      setStatus("Sistema Carregado!");
    }, 2000);
  }, []);

  return (
    <div>
      <Typography variant="h4">Status do Sistema: {status}</Typography>
      <Typography variant="body1" color="text.secondary">
        O vigia (useEffect) mudou o texto sozinho após 2 segundos!
      </Typography>
    </div>
  );
}

export default ExemploEffect;
