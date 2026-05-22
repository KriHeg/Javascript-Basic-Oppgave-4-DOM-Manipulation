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
const playerContainer = document.getElementById()

const enemyContainer = document.getElementById("enemycontainer");
const button = document.getElementById("grassButton");

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * pokemon.length);
  const randomPokemon = pokemon[randomNumber];

  enemyContainer.textContent = "";

  const name = document.createElement("h2");
  name.textContent = randomPokemon.name;

  const level = document.createElement("p");
  level.textContent = `Level: ${randomPokemon.level}`;

  const type = document.createElement("p");
  type.textContent = `Type: ${randomPokemon.type}`;

  const health = document.createElement("p");
  health.textContent = `Health: ${randomPokemon.health}`;

  const image = document.createElement("img");
  image.src = randomPokemon.image;
  image.alt = randomPokemon.name;
  image.width = 200;

  enemyContainer.appendChild(name);
  enemyContainer.appendChild(level);
  enemyContainer.appendChild(type);
  enemyContainer.appendChild(health);
  enemyContainer.appendChild(image);
});

function throwRock() {
    
}
