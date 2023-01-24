import MainImage from 'assets/images/main-image.png';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-content">
                <div className="home-card">
                    <div className="home-card-content">
                        <div>
                            <h1>O carro perfeito para você</h1>
                            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                        </div>
                    </div>
                    <div className="home-card-image">
                        <img src={MainImage} alt="Imagem Principal" />
                    </div>
                </div>

                <div className="home-button-card">
                    <Link to="/products">
                        <button className="btn">
                            <h6>VER CATÁLOGO</h6>
                        </button>
                    </Link>
                    <h5>Comece agora a navegar</h5>

                </div>
            </div>
        </div>
    );

}

export default Home;