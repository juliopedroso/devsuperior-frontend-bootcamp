import './styles.css';
import ProductCard from "pages/ProductCard";

const Catalog = () => {

    return (


        <div className="home-container">
            <div className="home-container-content">

                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="search-bar-container">
                                <form className="form-inline">
                                    <label>
                                        <input type="text" name="name" placeholder="Digite sua busca" />
                                    </label>
                                    <input className="search-btn btn" type="submit" value="BUSCAR" />
                                </form>
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