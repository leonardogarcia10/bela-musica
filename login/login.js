function validarLogin() {
  var email = document.getElementById("txtEmail").value;
  var senha = document.getElementById("txtSenha").value;

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