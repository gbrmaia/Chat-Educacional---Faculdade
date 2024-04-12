let validacaosenha = false;
let validacaoemail = false;
let validacaoconfirmsenha = false;

let timerId; // Variável para armazenar o ID do timeout

function startValidation(field) {
  // Limpa o timeout anterior, se houver
  clearTimeout(timerId);

  // Define um novo timeout para iniciar a validação após um pequeno atraso
  timerId = setTimeout(() => {
    validacaoEmail(field);
    reloadBotaoAcessar();
  }, 50); // Atraso de 50 milissegundos

  // Verifica se o campo está vazio
  if (field.value.trim() === "") {
    // Remove ambas as classes se o campo estiver vazio
    field.classList.remove("email-valido");
    field.classList.remove("email-invalido");
    validacaoemail = false;
  } 
}

function startValidationSenha(field) {
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    validacaoSenha(field);
    reloadBotaoAcessar();
  }, 50);

  if (field.value.trim() === "") {
    field.classList.remove("senha-valido");
    field.classList.remove("senha-invalido");
    document.getElementById("alerti").classList.add("hide");
    validacaosenha = false;
  }
}

function startValidationSenhaConfirm(field) {
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    validacaoSenhaConfirm(field);
    reloadBotaoAcessar();
  }, 50);

  if (field.value.trim() === "") {
    field.classList.remove("senha-valido");
    field.classList.remove("senha-invalido");
    document.getElementById("alerti2").classList.add("hide");
    validacaoconfirmsenha = false;
  }
}

function validacaoEmail(field) {
  const emailValue = field.value.trim(); // Remova espaços em branco no início e no final
  if (emailValue === "") {
    reloadBotaoAcessar();
    return ; // Se o campo estiver vazio, não faça nada
  }

  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("emailcadastro").innerHTML = "E-mail válido";
    field.classList.remove("email-invalido");
    field.classList.add("email-valido");
    validacaoemail = true;
  } else {
    document.getElementById("emailcadastro").innerHTML =
      "<font color='red'>Email inválido </font>";
      field.classList.remove("email-valido");
    field.classList.add("email-invalido");
    return false;
  }
}

function validarSenha(senha) {
  // Regex pra validar senha(pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e ter no mínimo 8 caracteres)
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}

function validacaoSenha(field) {
  const senhaValue = field.value.trim();
  if (senhaValue === "") {
    reloadBotaoAcessar();
    return ;
  }

  if (validarSenha(senhaValue)) {
    // Se a senha for válida, remova a classe "senha-invalido" e adicione a classe "senha-valido"
    document.getElementById("senhaprimaria").textContent = ""; // Limpa a mensagem de erro
    field.classList.remove("senha-invalido");
    field.classList.add("senha-valido");
    document.getElementById("alerti").classList.add("hide");
    validacaosenha = true;
  } else {
    document.getElementById("senhaprimaria").textContent =
      "A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e ter no mínimo 8 caracteres";
      field.classList.remove("senha-valido");
      field.classList.add("senha-invalido");
    document.getElementById("alerti").classList.remove("hide"); // Remove a classe "hide" para mostrar o ícone
    return false;
  }
}

function validacaoSenhaConfirm(field) {
  const senhaConfirmValue = field.value.trim();
  if (senhaConfirmValue === "") {
    reloadBotaoAcessar();
    return ;
  }

  const senhaValue = document.getElementById("senhaprimaria").value.trim(); // Valor do campo de senha

  if (senhaConfirmValue === senhaValue) {
    // Se a senha de confirmação for igual à senha principal, remova a classe "senha-invalido" e adicione a classe "senha-valido"
    field.classList.remove("senha-invalido");
    field.classList.add("senha-valido");
    document.getElementById("alerti2").classList.add("hide");
    validacaoconfirmsenha = true;
  } else {
    // Se a senha de confirmação for diferente da senha principal, adicione a classe "senha-invalido"
    field.classList.add("senha-invalido");
    field.classList.remove("senha-valido");
    document.getElementById("alerti2").classList.remove("hide");
    return false;
  }
}

function reloadBotaoAcessar() {
  const cadastrarConst = document.getElementById("botaocadastrar");

  if (validacaoemail && validacaosenha && validacaoconfirmsenha === true) {
    cadastrarConst.classList.remove("disabled"); // Remove a classe "disabled" para habilitar o botão
    cadastrarConst.removeAttribute("disabled");
    cadastrarConst.classList.remove("disabled-transition"); 

    //código da api de cadastro vai entrar aqui
  } else {
    cadastrarConst.classList.add("disabled"); // Adiciona a classe "disabled" para desabilitar o botão
    cadastrarConst.setAttribute("disabled", true)
    cadastrarConst.classList.add("disabled-transition");; 
  }

  // Verificar se algum campo está vazio e desabilitar o botão se necessário
  const emailCampo = document.getElementById("emailcadastro");
  const senhaCampo = document.getElementById("senhaprimaria");
  const confirmSenhaCampo = document.getElementById("confirmsenha");

  if (emailCampo.value.trim() === "" || senhaCampo.value.trim() === "" || confirmSenhaCampo.value.trim() === "") {
    cadastrarConst.classList.add("disabled");
    cadastrarConst.setAttribute("disabled", true);
    cadastrarConst.classList.add("disabled-transition");
  }
}