document.addEventListener('DOMContentLoaded', function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function(){   
  $('.btn-text-pop').popover({html:true});        
  $('.btn-text-too').tooltip();
});

const exampleEl = document.getElementById('tootltip')
const tooltip = new bootstrap.Tooltip(exampleEl, options)

let timerId; // Variável para armazenar o ID do timeout

function startValidation(field) {
  // Limpa o timeout anterior, se houver
  clearTimeout(timerId);

  // Define um novo timeout para iniciar a validação após um pequeno atraso
  timerId = setTimeout(() => {
    validacaoEmail(field);
  }, 50); // Atraso de 500 milissegundos (ajuste conforme necessário)

  // Verifica se o campo está vazio
  if (field.value.trim() === "") {
    // Remove ambas as classes se o campo estiver vazio
    field.classList.remove("email-valido");
    field.classList.remove("email-invalido");
  }
}

function startValidationSenha(field) {
  // Limpa o timeout anterior, se houver
  clearTimeout(timerId);

  // Define um novo timeout para iniciar a validação após um pequeno atraso
  timerId = setTimeout(() => {
    validacaoSenha(field);
  }, 50); // Atraso de 500 milissegundos (ajuste conforme necessário)

  // Verifica se o campo está vazio
  if (field.value.trim() === "") {
    // Remove ambas as classes se o campo estiver vazio
    field.classList.remove("senha-valido");
    field.classList.remove("senha-invalido");
  }
}

function startValidationSenhaConfirm(field) {
  // Limpa o timeout anterior, se houver
  clearTimeout(timerId);

  // Define um novo timeout para iniciar a validação após um pequeno atraso
  timerId = setTimeout(() => {
    validacaoSenhaConfirm(field);
  }, 50); // Atraso de 500 milissegundos (ajuste conforme necessário)

  // Verifica se o campo está vazio
  if (field.value.trim() === "") {
    // Remove ambas as classes se o campo estiver vazio
    field.classList.remove("senha-valido");
    field.classList.remove("senha-invalido");
  }
}

function validacaoEmail(field) {
  const emailValue = field.value.trim(); // Remova espaços em branco no início e no final
  if (emailValue === "") {
    // Se o campo estiver vazio, não faça nada
    return;
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
    field.classList.remove("email-invalido"); // Remove a classe se o e-mail for válido
    field.classList.add("email-valido");
  } else {
    document.getElementById("emailcadastro").innerHTML =
      "<font color='red'>Email inválido </font>";
    field.classList.add("email-invalido");
  }
}

function validarSenha(senha) {
  // Expressão regular para validar a senha (pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e ter no mínimo 8 caracteres)
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}

function validacaoSenha(field) {
  const senhaValue = field.value.trim(); // Remova espaços em branco no início e no final
  if (senhaValue === "") {
    // Se o campo estiver vazio, não faça nada
    return;
  }

  if (validarSenha(senhaValue)) {
    // Se a senha for válida, remova a classe "senha-invalido" e adicione a classe "senha-valido"
    document.getElementById("senhaprimaria").textContent = ""; // Limpa a mensagem de erro
    field.classList.remove("senha-invalido");
    field.classList.add("senha-valido");
  } else {
    // Se a senha for inválida, exiba a mensagem de erro e adicione a classe "senha-invalido"
    document.getElementById("senhaprimaria").textContent =
      "A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e ter no mínimo 8 caracteres";
    field.classList.add("senha-invalido");
  }
}

function validacaoSenhaConfirm(field) {
    const senhaConfirmValue = field.value.trim(); // Remova espaços em branco no início e no final
    if (senhaConfirmValue === "") {
        // Se o campo estiver vazio, não faça nada
        return;
    }

    const senhaValue = document.getElementById("senhaprimaria").value.trim(); // Valor do campo de senha

    if (senhaConfirmValue !== senhaValue) {
        // Se a senha de confirmação for diferente da senha principal, adicione a classe "senha-invalido"
        field.classList.add("senha-invalido");
        field.classList.remove("senha-valido");
    } else {
        // Se a senha de confirmação for igual à senha principal, remova a classe "senha-invalido" e adicione a classe "senha-valido"
        field.classList.remove("senha-invalido");
        field.classList.add("senha-valido");
    }
}
