// Menu hamburguer
const menuButton = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Redirecionamento para a página de pagamento
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".product button");
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "pagamento.html";
        });
    });
});
