const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const recipes = [
    {
        id: 'doce',
        name: "Docinhos pão-do-céu",
        by: 'por Ricardo Golvea'
    },
    {
        id: 'lasanha',
        name: "Lasanha mac n’ cheese",
        by: 'por Juliano Vieira'
    },
    {
        id: 'asinhas',
        name: "Asinhas de frango ao barbecue",
        by: 'por Vania Steroski'
    },
    {
        id: 'burger',
        name: "Triplo bacon burger",
        by: 'por Jorge Relato'
    },
    {
        id: 'pizza',
        name: "Pizza 4 estações",
        by: 'por Fabiana Melo'
    },
    {
        id: 'espaguete',
        name: "Espaguete ao alho",
        by: 'por Júlia Kinoto'
    },
]

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id');
        const recipe = recipes.filter(r => r.id === cardId)[0]; 
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `./assets/images/${cardId}.png`;
        modalOverlay.querySelector("h6").innerHTML = recipe.name;
        modalOverlay.querySelector("p").innerHTML = recipe.by;

    });
}

document.querySelector('.close').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("img").src = "";
});