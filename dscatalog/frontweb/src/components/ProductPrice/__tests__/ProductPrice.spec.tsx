import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

test('ProductPrice should render with given price', () => {

    //ARRANGE
    const price = 1234.56;

    //ACT
    render(<ProductPrice price={price} />)


    //ASSERT
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("1.234,56")).toBeInTheDocument();

})