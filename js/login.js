document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botaologin').addEventListener('click', function(event) {
        event.preventDefault()
        // Obtenha o valor do campo de login
        var validarlogin = document.getElementById('campoemail').value;
        // Obtenha o valor do campo de senha
        var validarsenha = document.getElementById('camposenha').value;

        // Verifique se ambos, login e senha, são 'admin'
        if (validarlogin === 'admin@admin.com' && validarsenha === 'admin') {
            // Se ambos forem 'admin', redirecione para chatbot.html
            window.location.href = "chatbot.html";
        } else {
            // Caso contrário, você pode alertar o usuário que o login/senha está incorreto
            alert("Login ou senha incorretos.");
        }
    });
});
