import { useEffect, useState } from "react"
import { GamesDetail } from "../GamesDetail/GamesDetail";

export const ItemDetailContainer = () => {

    const [game, setGame] = useState (null);
    
    const getGame = async (id) => {

        try {
            const resp = await fetch ('src/MockPokemon.json');
            const data = await resp.json()
            setGame(data);


        } catch (error) {
            console.log(error);
    }

useEffect (() => {
    
    getGame()    

}, [])

    }
  return (
    <div>
        { game && <GamesDetail {...game}/> }
    </div>
  )
  }