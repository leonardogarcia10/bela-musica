'use strict;';

// eslint-disable-next-line no-unused-vars
let formulario = document.forms['meuFormulario'];
// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars
function validarFormulario() {
    let nomeInput = document.getElementById('txtNomeCompleto');
    let emailInput = document.getElementById('txtEmail');
    let mensagemInput = document.getElementById('txtMensagem');
    let nome = nomeInput.value.trim();
    let email = emailInput.value.trim();
    let mensagem = mensagemInput.value.trim();


    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
    }
}


  // eslint-disable-next-line no-unused-vars
  function novo(){
    let Envio = document.getElementById('txtNovo');
    Envio.textContent = 'Certifique que suas informações estejam certas';

  }

    // eslint-disable-next-line no-unused-vars, max-len
    document.getElementById('txtPreferencia').addEventListener('change', preferencia);
    function preferencia() {
    let selectOpcoes = document.getElementById('txtPreferencia');
    let opcaoSelecionada = selectOpcoes.value;

  switch (opcaoSelecionada) {
    case 'email':
      alert('Opção selecionada: E-mail');
      break;
    case 'celular':
      alert('Opção selecionada: Celular');
      break;
    default:
      alert('Opção inválida');
      break;
  }
}

// eslint-disable-next-line max-len
document.getElementById('txtPreferencia').addEventListener('change', preferencia);
