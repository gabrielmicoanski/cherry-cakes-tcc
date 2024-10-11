function changeCategory(category) {
    var line1 = document.querySelector("#cards-line1");
    var line2 = document.querySelector("#cards-line2");
    var category1 = document.querySelector("#category1");
    var category2 = document.querySelector("#category2");


    category1.classList.remove('active');
    category2.classList.remove('active');

    if (category === 'bolos') {
        line1.style.display = 'flex';
        line2.style.display = 'none';
        category1.classList.add('active');


        animateCards("#cards-line1 .box");
    } else {
        line1.style.display = 'none';
        line2.style.display = 'flex';
        category2.classList.add('active');


        animateCards("#cards-line2 .box");
    }
}

function animateCards(cardsSelector) {
    var cards = document.querySelectorAll(cardsSelector);
    cards.forEach(function(card) {
        card.classList.add("fade-in");
    });

    setTimeout(function() {
        cards.forEach(function(card) {
            card.classList.remove("fade-in");
        });
    }, 600);
}
