const cards = document.querySelectorAll('.card');
const fiveAndSixCards = document.querySelectorAll(".card:nth-child(5), .card:nth-child(6)");


function updateCardsVisibility() {
    let screenWidth = window.innerWidth;
    fiveAndSixCards.forEach(function(card) {
        card.addEventListener("animationend", () => {
            card.style.display = (screenWidth <= 800) ? 'none' : 'flex';
            }
        );
    });
}
window.addEventListener("DOMContentLoaded", updateCardsVisibility);
window.addEventListener("resize", updateCardsVisibility);

function removeActiveClass() {
    cards.forEach((card) => {
        card.classList.remove('active');
    })
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClass(card)
        card.classList.add('active');
    })
})





