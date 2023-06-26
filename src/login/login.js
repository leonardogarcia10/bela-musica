'use strict';
// eslint-disable-next-line no-unused-vars
function validarLogin() {
  let email = document.getElementById('txtEmail').value;
  let senha = document.querySelector('#txtSenha').value;

  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    alert('E-mail inválido');
    return false;
  }

  if (senha.length < 6) {
    alert('Senha inválida');
    return false;
  }

   localStorage.setItem('email', email);
   localStorage.setItem('senha', senha);

   window.onload = function() {
      var email = localStorage.getItem('email');
      var senha = localStorage.getItem('senha');
      var lembrar = localStorage.getItem('lembrar');

      if (email) {
          document.getElementById('txtEmail').value = email;
      }

      if (senha) {
          document.getElementById('txtSenha').value = senha;
      }

      if (lembrar) {
          document.getElementById('txtLembrar').checked = true;
      }
  };

let SenhaEemail = email;
let json = JSON.stringify(SenhaEemail);
console.log(json);
  window.location.href = '../home/index.html';
}

// eslint-disable-next-line no-unused-vars
function dentro() {
   document.getElementById('txtEmail').style.background = '#FFEE75';
}

// eslint-disable-next-line no-unused-vars
function fora() {
   document.getElementById('txtEmail').style.background = '#E5EAEE';
}
// eslint-disable-next-line no-unused-vars
function dentroS() {
   document.getElementById('txtSenha').style.background = '#FFEE75';
}
// eslint-disable-next-line no-unused-vars
function foraS() {
   document.getElementById('txtSenha').style.background = '#E5EAEE';
}

// eslint-disable-next-line no-undef

