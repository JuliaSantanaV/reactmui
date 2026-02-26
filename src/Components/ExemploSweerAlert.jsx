import Swal from "sweetalert2";

function ExemploSweerAlert() {
  Swal.fire({
    title: "Você tem certeza?",
    text: "Isso não pode ser revertido!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, delete!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deletado!", "Seu arquivo foi removido.", "success");
    }
  });
}

export default ExemploSweerAlert;
