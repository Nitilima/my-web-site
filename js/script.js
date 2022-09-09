// CONTATO
// Foi criado uma função com o parametro "Enviar", 
// para quando a pessoa colocar o seu nome no formulario vai receber um alerta dizendo que foi recebido os dados
function Enviar() {
  var nome = document.getElementById("floatingName");
  var email = document.getElementById("floatingInput");

  if (nome.value != "") {
    alert(
      "Obrigado(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
