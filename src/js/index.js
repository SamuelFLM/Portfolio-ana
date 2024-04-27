var btnAdicionar = document.getElementById("btn-adicionar");

btnAdicionar.addEventListener("click", () => {
  var nome = prompt("Nome Matéria: ");

  adicionarItem(nome);
});

var btnEnviar = document.getElementById("btn-enviar");
var email = document.getElementById("exampleInputEmail1");
var cpf = document.getElementById("exampleInputCPF");

$(document).ready(function () {
  $("#exampleInputCPF").mask("000.000.000-00", { reverse: true });
});

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
email.addEventListener("keyup", () => {
  if (emailRegex.test(email.value)) {
    alteraCorBorda("#exampleInputEmail1", "green");
  } else {
    alteraCorBorda("#exampleInputEmail1", "red");
  }
});
cpf.addEventListener("keyup", () => {
  if (cpfRegex.test(cpf.value)) {
    alteraCorBorda("#exampleInputCPF", "green");
  } else {
    alteraCorBorda("#exampleInputCPF", "red");
  }
});

btnEnviar.addEventListener("click", () => {
  // alert("Email: " + email.value + " " + "CPF: " + cpf.value);
});

var btnPng = document.querySelector(".btn-png");

btnPng.addEventListener("click", () => {
  ordernaListaDeMaterias();
});

function ordernaListaDeMaterias() {
  var listaDeMaterias = document.querySelector(".list-group");
  var list = Array.from(listaDeMaterias.querySelectorAll(".list-group-item"));

  list.sort((a, b) => a.textContent.localeCompare(b.textContent, "pt-BR"));

  list.forEach((item) => {
    listaDeMaterias.appendChild(item);
  });
}
function adicionarItem(nome) {
  var novoItem = document.createElement("li");

  novoItem.classList.add("list-group-item");

  novoItem.textContent = nome;

  document.querySelector(".list-group").appendChild(novoItem);
}

function alteraCorBorda(id, cor) {
  $(document).ready(function () {
    $(id).css("border-color", cor);
  });
}
