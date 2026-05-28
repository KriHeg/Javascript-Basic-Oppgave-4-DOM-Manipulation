const player = {
  pokeballs: 10,
  rocks: 10,
  image: "images/player.jpg",
};

const pokemon = [
  {
    name: "pikachu",
    level: 10,
    type: "electric",
    health: 20,
    image: "images/Pikachu.jpg",
  },
  {
    name: "charmander",
    level: 5,
    type: "fire",
    health: 15,
    image: "images/Charmander.png",
  },
  {
    name: "Totodile",
    level: 15,
    type: "water",
    health: 10,
    image: "images/Totodile.jpg",
  },
];
const enemyContainer = document.getElementById("enemycontainer");

const grassButton = document.getElementById("grassButton");
const rockButton = document.getElementById("rockButton");

let currentPokemon = null;

grassButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * pokemon.length);
  currentPokemon = pokemon[randomNumber];

  renderPokemon();
});

rockButton.addEventListener("click", throwRock);

function renderPokemon() {
  enemyContainer.textContent = "";

  const name = document.createElement("h2");
  name.textContent = currentPokemon.name;

  const level = document.createElement("p");
  level.textContent = `Level: ${currentPokemon.level}`;

  const type = document.createElement("p");
  type.textContent = `Type: ${currentPokemon.type}`;

  const health = document.createElement("p");
  health.textContent = `Health: ${currentPokemon.health}`;
  health.id = "healthText";

  const image = document.createElement("img");
  image.src = currentPokemon.image;
  image.alt = currentPokemon.name;
  image.width = 200;

  enemyContainer.appendChild(name);
  enemyContainer.appendChild(level);
  enemyContainer.appendChild(type);
  enemyContainer.appendChild(health);
  enemyContainer.appendChild(image);
}

function throwRock() {
  if (!currentPokemon) {
    alert("Ingen pokemon funnet!");
    return;
  }

  if (player.rocks <= 0) {
    alert("Du har ingen steiner igjen!");
    return;
  }

  player.rocks--;

  currentPokemon.health -= 5;

  if (currentPokemon.health < 0) {
    currentPokemon.health = 0;
  }

  document.getElementById("healthText").textContent =
    `Health: ${currentPokemon.health}`;

  if (currentPokemon.health === 0) {
    alert(`${currentPokemon.name} fainted!`);
  }
}
