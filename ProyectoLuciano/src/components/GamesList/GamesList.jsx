import { Games } from "../Games/Games"

export const GamesList = ({games}) => {
  return (

    <div className="d-flex flex-sm-wrap">
        { games.map(games => <Games key={games.id} {...games} /> ) }
    </div>

  )
}
