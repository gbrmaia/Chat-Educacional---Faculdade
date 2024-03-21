document.addEventListener('DOMContentLoaded', function() {
  // Inicializando os tooltips do Bootstrap
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Inicializando os popovers do Bootstrap
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function(popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
  });

  // Inicializando os tooltips de texto do Bootstrap
  $('.btn-text-pop').popover({ html: true });        
  $('.btn-text-too').tooltip();
});

const exampleEl = document.getElementById('tootltip')
const tooltip = new bootstrap.Tooltip(exampleEl, options)

