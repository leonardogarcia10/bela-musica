"use strict;"

let formulario = document.forms["meuFormulario"];
// eslint-disable-next-line no-unused-vars
var txtNomeCompleto = formulario.elements["campoNome"];


// eslint-disable-next-line no-unused-vars
function validarFormulario() {
    let nomeInput = document.getElementById("txtNomeCompleto");
    let emailInput = document.getElementById("txtEmail");
    let mensagemInput = document.getElementById("txtMensagem");
    let nome = nomeInput.value.trim();
    let email = emailInput.value.trim();
    let mensagem = mensagemInput.value.trim();
  
    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return false; // Impede o envio do formulário
    }
  
    // Outras validações...
  
    return true; // Permite o envio do formulário
  }
  
  // eslint-disable-next-line no-unused-vars
  function novo(){
    var Envio = document.getElementById("txtNovo")
    Envio.textContent = "Certifique que suas informações estejam certas"

  }

    // eslint-disable-next-line no-unused-vars
    function preferencia(){
        document.getElementById("txtPreferencia")
        let opc1 = document.getElementById("op1")
        let opc2 = document.getElementById("op2")

        if (opc1) {
            alert("Você selecionou receber a resposta por e-mail.")
        } else if (opc2) {
            alert("Você selecionou receber a resposta por celular.")
        }
    }
  
  

  
  