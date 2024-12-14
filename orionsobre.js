// Seleciona os elementos do DOM
const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

// Adiciona um evento de clique ao menu hambúrguer
menu.addEventListener('click', () => {
    // Alterna a classe 'active' na lista de navegação
    navList.classList.toggle('active');

    // Alterna a animação das linhas do menu hambúrguer
    menu.classList.toggle('open');
});

