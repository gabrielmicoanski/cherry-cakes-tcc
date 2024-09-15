function changeCategory(category) {
    var line1 = document.querySelector("#cards-line1");
    var line2 = document.querySelector("#cards-line2");
    var category1 = document.querySelector("#category1");
    var category2 = document.querySelector("#category2");

    // Remove a classe 'active' de ambas as categorias
    category1.classList.remove('active');
    category2.classList.remove('active');

    if (category === 'bolos') {
        line1.style.display = 'flex';
        line2.style.display = 'none';
        category1.classList.add('active'); // Adiciona a classe 'active' para 'bolos'

        // Animação para os cards da linha 1
        animateCards("#cards-line1 .box");
    } else {
        line1.style.display = 'none';
        line2.style.display = 'flex';
        category2.classList.add('active'); // Adiciona a classe 'active' para 'doces'

        // Animação para os cards da linha 2
        animateCards("#cards-line2 .box");
    }
}

function animateCards(cardsSelector) {
    var cards = document.querySelectorAll(cardsSelector);
    cards.forEach(function(card) {
        card.classList.add("fade-in");
    });

    // Remove a animação após terminar para reiniciar na próxima troca
    setTimeout(function() {
        cards.forEach(function(card) {
            card.classList.remove("fade-in");
        });
    }, 600);
}
