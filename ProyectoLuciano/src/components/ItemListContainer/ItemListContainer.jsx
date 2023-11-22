import { useEffect, useState } from "react";
import { GamesList } from "../GamesList/GamesList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category)
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGames = async () => {
    try {
      const resp = await fetch('src/MockPokemon.json');
      const data = await resp.json();
      console.log(data);

      if (category) {
        
        const categoryFilter = data.filter(game => game.category === category);

        setGames(categoryFilter);
        setIsLoading(false);
      } else {
        
        setGames(data);
        setIsLoading(false);
      }

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []); 

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : <GamesList games={games} />}
    </>
  );
};