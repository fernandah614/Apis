import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return(
        <div className="home-principal">
            <h1> Explora el Mundo con Nosotros 🌍</h1>
            <div className="buttons">
        <Link to="/dogs"><button>🐶 Ver Perros</button></Link>
        <Link to="/cats"><button>🐱 Ver Gatos</button></Link>
        <Link to="/ghibli"><button>🎬 Ver Ghibli</button></Link>
        </div>
        </div>
    )
}
export default Home;