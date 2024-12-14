const menuButton = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões "Comprar"
    const buyButtons = document.querySelectorAll(".card button");

    // Itera por cada botão
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Abrir uma página fictícia de pagamento
            window.location.href = "pagamento.html";
        });
    });
});