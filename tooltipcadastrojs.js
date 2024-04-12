document.addEventListener('DOMContentLoaded', function() {
  // Inicializando os tooltips e popovers do Bootstrap
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function(popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
  });

  const toggleSenhaButton = document.getElementById("toggleSenha");
  const senhaInput = document.getElementById("senhaprimaria");
  const senhaConfirmInput = document.getElementById("confirmsenha");
  
  toggleSenhaButton.addEventListener("click", function() {
    if (senhaInput.classList.contains("show-password")) {
      // Se a classe show-password estiver presente, remova-a para ocultar a senha
      senhaInput.type = "password";
      senhaInput.classList.remove("show-password");
      senhaConfirmInput.type = "password";
      senhaConfirmInput.classList.remove("show-password");
      toggleSenhaButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      // Se a classe show-password não estiver presente, adicione-a para mostrar a senha
      senhaInput.type = "text";
      senhaInput.classList.add("show-password");
      senhaConfirmInput.type = "text";
      senhaConfirmInput.classList.add("show-password");
      toggleSenhaButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  });
});
