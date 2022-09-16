import MainImage from 'assets/images/main-image.png';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
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
                <div>
                    <button className="btn btn-primary">
                        <h5>VER CATÁLOGO</h5>
                    </button>
                    <h4>Comece agora a navegar</h4>
                </div>
            </div>
        </div>
    );

}

export default Home;