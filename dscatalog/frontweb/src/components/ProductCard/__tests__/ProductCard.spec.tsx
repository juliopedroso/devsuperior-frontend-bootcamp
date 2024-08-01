import { render, screen } from "@testing-library/react";
import ProductCard from "..";
import { Product } from "types/product";

test('ProductCard should render with given product', () => {

    //ARRANGE
    const product: Product = {
        id: 25,
        name: "PC Gamer Foo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 4170.0,
        imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/25-big.jpg",
        date: "2020-07-14T10:00:00Z",
        categories: [
            {
                id: 3,
                name: "Computadores"
            }
        ]
    } as Product;

    //ACT
    render(<ProductCard product={product} />)

    //ASSERT
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('4.170,00')).toBeInTheDocument();

})