import './styles.css';
import ProductCard from "pages/ProductCard";

const Catalog = () => {

    return (

        <div className="home-container">
            <div className="home-container-content">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="search-bar-container">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Digite sua busca" aria-label="Digite sua busca" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn search-bar-container-btn" type="submit">BUSCAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4 ">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <ProductCard />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

}

export default Catalog;