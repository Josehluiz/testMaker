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

    advanceBtn.addEventListener('click', function () {
        loader.classList.remove('d-none');
        setTimeout(() => {
            loader.classList.add('d-none'); 
             window.location.href = 'index.html';
        }, 500); 
    });


    closeBtn.addEventListener('click', function () {
        createForm.classList.add('d-none');
        createCard.classList.remove('d-none'); 
    });
});
