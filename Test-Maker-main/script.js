document.addEventListener('DOMContentLoaded', () => {
    const generateCardBtn = document.getElementById('generateCardBtn');
    const deleteCardBtn = document.getElementById('deleteCardBtn');
    const returnPageBtn = document.getElementById('returnPageBtn');
    const cardContainer = document.getElementById('cardContainer');
    const provas = document.getElementById('provas');
    const titulo = document.getElementById('tituloSalas');

    // Adiciona o evento de clique ao botão "Criar Prova"
    generateCardBtn.addEventListener('click', createCardElementCard);

    // Carregar os cards salvos do localStorage
    loadCardsFromLocalStorage();

    // Deletar um card
    function deleteCard() {
        if (cardContainer.lastChild) {
            cardContainer.removeChild(cardContainer.lastChild);
            saveCardsToLocalStorage();
        }
    }

    function createCardElement() {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3'; // Define a coluna para ocupar 1/3 da largura da linha
        card.dataset.id = generateUniqueId(); // Adiciona um ID único ao card

        card.innerHTML = `
            <div class="card bg-dark text-white mt-2" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./imagens/clip_icon.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Sala teste</h5>
                            <p class="card-text">Aqui vai ter provas armazenadas.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="#" class="col-md-8 btn btn-primary entrar-btn">Entra</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adiciona o evento de clique ao botão 'Entra'
        const entrarBtn = card.querySelector('.entrar-btn');
        entrarBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Mostra o loader
            const loader = document.getElementById('loader');
            loader.style.display = 'block';

            // Redireciona após um delay (ex: 1 segundo)
            setTimeout(function() {
                window.location.href = 'teste.html';
            }, 1000); // Altere o tempo conforme necessário
        });

        return card;
    }

    // Salvar os cards no localStorage
    function saveCardsToLocalStorage() {
        const cards = [];
        cardContainer.childNodes.forEach(card => {
            cards.push({
                id: card.dataset.id,
                content: card.innerHTML
            });
        });
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    // Carregar os cards salvos
    function loadCardsFromLocalStorage() {
        const cards = JSON.parse(localStorage.getItem('cards'));
        if (cards) {
            cards.forEach(cardData => {
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-3';
                card.dataset.id = cardData.id;
                card.innerHTML = cardData.content;
                card.querySelector('.entrar-btn').addEventListener('click', () => {
                    enterRoom(card.dataset.id);
                });
                cardContainer.appendChild(card);
            });
        }
    }

    // Gerar um ID único
    function generateUniqueId() {
        return 'card-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    // Entrar na sala
    function enterRoom(roomId) {
        // Esvazia o contêiner de cards
        cardContainer.innerHTML = '';
        // Esvazia o conteúdo dos botões
        generateCardBtn.style.display = 'none';
        deleteCardBtn.style.display = 'none';
        returnPageBtn.style.display = 'block';
        provas.style.display = 'block';
        titulo.style.display = 'none';
    }

    // Retornar para a página principal
    function returnToMainPage() {
        // Restaura os botões
        generateCardBtn.style.display = 'block';
        deleteCardBtn.style.display = 'block';
        returnPageBtn.style.display = 'none';
        provas.style.display = 'none';  
        titulo.style.display = 'block';
        // Recarrega os cards do localStorage
        loadCardsFromLocalStorage();
    }
});
