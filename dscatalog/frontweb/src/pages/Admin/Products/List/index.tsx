import ProductCrudCard from "pages/Admin/Products/ProductCrudCard";

import './styles.css'
import { Link } from "react-router-dom";
import { Product } from "types/product";
import { SpringPage } from "types/vendor/spring";
import { useCallback, useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import Pagination from "components/Pagination";
import ProductFilter, { ProductFilterData } from "components/ProductFilter";



type ControlComponentsData = {
    activePage: number;
    filterData: ProductFilterData;
}

const List = () => {

    const [page, setPage] = useState<SpringPage<Product>>();

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
        activePage: 0,
        filterData: { name: "", category: null }
    });

    const getProducts = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/products",
            params: {
                page: controlComponentsData.activePage,
                size: 5,
                name: controlComponentsData.filterData.name,
                categoryId: controlComponentsData.filterData.category?.id
            }
        };

        requestBackend(config)
            .then((response) => {
                setPage(response.data);
            })
            .finally(() => {
            });
    }, [controlComponentsData]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const handleSubmitFilter = (filterData: ProductFilterData) => {
        setControlComponentsData({ activePage: 0, filterData })
    }

    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData })
    }

    return (
        <div className="product-crud-container">
            <div className="product-crud-bar-container">
                <Link to={"/admin/products/create"}>
                    <button className="btn btn-primary text-white btn-crud-add">ADICIONAR</button>
                </Link>
                <ProductFilter onSubmitFilter={handleSubmitFilter} />
            </div>
            <div className="row">
                {
                    page?.content.map(product => (
                        <div className="col-sm-6 col-md-12" key={product.id}>
                            <ProductCrudCard product={product} onDelete={() => getProducts} ></ProductCrudCard>
                        </div>
                    ))
                }

            </div>
            <Pagination
                forgePage={page?.number}
                pageCount={(page) ? page?.totalPages : 0}
                range={3}
                onChange={handlePageChange}
            />
        </div>
    )
}
export default List;