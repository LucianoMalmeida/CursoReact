const games = [

{"name": "Pokemon Red","id": "1","details": "Pokemon Red el mejor", "img" : "/img/PokemonRed.jpg", "category": "rare"},
{"name": "Pokemon Blue","id": "2","details": "Pokemon Blue el mejor", "img" : "/img/PokemonBlue.jpg", "category": "normal"},
{"name": "Pokemon Yellow","id": "3","details": "Pokemon Yellow el mejor", "img" : "/img/PokemonYellow.jpg", "category": "super"}

]

export const getProducts = () => games;

export const getProductsByCategory = (category) => {
  return category
    ? games.filter((game) => game.category === category)
    : games;
};

export const getProductById = (id) => {
  return games.find((game) => game.id === id);
};