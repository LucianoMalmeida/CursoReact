import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="/img/poke-ball.png" alt="" style={{width: "50px"}}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to={"/"}><button className="btn btn-dark-light">Home</button></Link>
      <Link to={"/category/normal"}><button className="btn btn-dark-light">Normal</button></Link>
      <Link to={"/category/rare"}><button className="btn btn-dark-light">Rare</button></Link>
      <Link to={"/category/super"}><button className="btn btn-dark-light">Super</button></Link>
      <a className="nav-item nav-link" href="#"> <CartWidget/> </a>
    </div>
  </div>
</nav>

    )
}

