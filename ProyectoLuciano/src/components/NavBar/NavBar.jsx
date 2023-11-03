import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src="/img/poke-ball.png" alt="" style={{width: "50px"}}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Pokemons</a>
      <a class="nav-item nav-link" href="#">About Us</a>
      <a class="nav-item nav-link" href="#"> <CartWidget/> </a>
    </div>
  </div>
</nav>

    )
}

