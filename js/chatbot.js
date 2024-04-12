/**
 * Retorna a data da criação da mensagem.
 */
function getCurrentTimestamp() {
	return new Date();
}

/**
 * Renderiza as mensagens baseado nos argumentos.
 * A chamada é feita por `showUserMessage` e `showBotMessage`.
 */
function renderMessageToScreen(args) {
	// variaveis locais para renderMessage
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('pt-BR', {
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	// inicia o elemento message
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);

	// adiciona o parametro message ao container ( caixa )
	messagesContainer.append(message);

	// animaçoes
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/* Envia a mensagem ao clicar em enviar ou ao pressionar enter
 */
$(document).ready(function() {
    $('#msg_input').keydown(function(e) {
        // Verifica a tecla enter, se esta pressionada
        if (e.key === 'Enter') {
            // Impedir comportamento padrão do enter
            e.preventDefault();
			// Adicionar açao de enviar no botao Enviar
            $('#send_button').click();
        }
    });
});

/**
 * Mostra a mensagem por parte do usuario. Lado direito.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

/**
 * Mostra a mensagem do chatbot. Lado esquerdo.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

/**
 * Pega o input do usuario e mostra ele na tela ao enviar.
 */
$(document).on('click', '#send_button', function (e) {
    // Pega e mostra o input e após isso limpa o campo
    showUserMessage($('#msg_input').val());
    $('#msg_input').val('');

    // Simula uma resposta do chatbot
    console.log('Botão funcionando');
    setTimeout(function () {
        showBotMessage("Olá, seja bem-vindo!");
    }, 300);
});

/**
 * Seta a mensagem inicial do chatbot
 */
$(window).on('load', function () {
	showBotMessage('Olá caro estudante, seja bem vindo ao Chatbot Educacional!');
});

$(window).on('load', function () {
	showBotMessage('Selecione uma das seguintes opções abaixo:<br><br>1 - Buscar pdf do boleto do mês atual<br>2 - Consultar suas notas<br>3 - Datas das provas');
});