import { useEffect, useState, useParams } from "react"
import { GamesDetail } from "../GamesDetail/GamesDetail";
import { getProductById } from "../../MockPokemon.js";

export const ItemDetailContainer = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  const getGame = async () => {
    try {
      
      const product = await getProductById(id);
      setGame(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGame();
  }, [id]);

  return (
    <div>{game && <GamesDetail {...game} />}</div>
  );
};