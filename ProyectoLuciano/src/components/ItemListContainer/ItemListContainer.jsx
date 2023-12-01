import { useEffect, useState } from "react";
import { GamesList } from "../GamesList/GamesList";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../MockPokemon.js";

export const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGames = async () => {
    try {
      const categoryFilter = await getProductsByCategory(category);

      setGames(categoryFilter);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, [category]);

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : <GamesList games={games} />}
    </>
  );
};