"use strict";
// eslint-disable-next-line no-unused-vars
function validarLogin() {
  let email = document.getElementById("txtEmail").value;
  let senha = document.querySelector('#txtSenha').value;

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("E-mail inválido");
    return false;
  }

  if (senha.length < 6) {
    alert("Senha inválida");
    return false;
  }

  window.location.href = "../home/index.html";
}

// eslint-disable-next-line no-unused-vars
function dentro()
{
   document.getElementById("txtEmail").style.background = '#FFEE75'
}

// eslint-disable-next-line no-unused-vars
function fora()
{
   document.getElementById("txtEmail").style.background = "#E5EAEE";
}
// eslint-disable-next-line no-unused-vars
function dentroS()
{
   document.getElementById("txtSenha").style.background = '#FFEE75'
}
// eslint-disable-next-line no-unused-vars
function foraS()
{
   document.getElementById("txtSenha").style.background = "#E5EAEE";
}

