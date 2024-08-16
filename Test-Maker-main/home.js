document.addEventListener('DOMContentLoaded', function () {
    const createCard = document.getElementById('create-card');
    const createForm = document.getElementById('create-form');
    const advanceBtn = document.getElementById('advance-btn');
    const loader = document.getElementById('loader');
    const closeBtn = document.getElementById('close-btn');

    // Mostrar o formulário e esconder o cartão ao clicar no botão "Criar Prova"
    createCard.addEventListener('click', function () {
        createCard.classList.add('d-none'); // Oculta o createCard
        createForm.classList.remove('d-none'); // Mostra o createForm
    });

    // Mostrar o loader e redirecionar ao clicar no botão "Avançar"
    advanceBtn.addEventListener('click', function () {
        loader.classList.remove('d-none'); // Exibe o loader
        setTimeout(() => {
            loader.classList.add('d-none'); // Esconde o loader após o tempo
            window.location.href = 'gerar.html'; // Redireciona para gerar.html
        }, 500); // Tempo do loader antes de redirecionar
    });

    // Fechar o formulário e mostrar o cartão ao clicar no botão "Fechar"
    closeBtn.addEventListener('click', function () {
        createForm.classList.add('d-none'); // Oculta o createForm
        createCard.classList.remove('d-none'); // Mostra o createCard
    });
});
