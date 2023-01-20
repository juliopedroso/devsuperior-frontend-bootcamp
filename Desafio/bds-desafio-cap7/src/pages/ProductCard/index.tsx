import './styles.css';
import ProductImg from 'assets/images/Product.png';


const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card-top-container">
                <div className="product-image">
                    <img src={ProductImg} alt="Nome do Produto"/>
                </div>
            </div>
           
                <div className="product-name"> 
                    Nome do Produto                
                </div>
            

                <div className="product-description"> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
                </div>

            <div className="product-card-bottom-container">
                <button className="btn">
                    <h6>COMPRAR</h6>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;