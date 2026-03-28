// Funções dinâmicas para o PataFeliz Petshop

// Função temporal: Saudação baseada no horário
function exibirSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia! Seu pet merece o melhor hoje!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde! Que tal um banho para o seu amiguinho?";
    } else {
        saudacao = "Boa noite! Estamos prontos para atender você amanhã!";
    }

    const elementoSaudacao = document.getElementById("saudacao-dinamica");
    if (elementoSaudacao) {
        elementoSaudacao.innerText = saudacao;
    }
}

// Validação simples de formulário
function validarFormulario(event) {
    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
    }
    form.classList.add('was-validated');
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    exibirSaudacao();
    
    const formAgendamento = document.getElementById("form-agendamento");
    if (formAgendamento) {
        formAgendamento.addEventListener("submit", validarFormulario);
    }
});
