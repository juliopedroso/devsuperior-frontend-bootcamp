import { render, screen } from "@testing-library/react";
import Pagination from "..";
import userEvent from "@testing-library/user-event";

describe('Pagination Tests', ()=>{
    test('should render pagination', () => {

        //ARRANGE
        const pageCount = 3;
        const range = 3;
            
        //ACT
        render(<Pagination pageCount={pageCount} range={range} />)
    
        //ASSERT
        const page1 = screen.getByText("1");
        const page2 = screen.getByText("2");
        const page3 = screen.getByText("3");
        const page4 = screen.queryByText("4");

        expect(page1).toBeInTheDocument();
        expect(page1).toHaveClass('pagination-link-active');
        expect(page2).toBeInTheDocument();
        expect(page2).not.toHaveClass('pagination-link-active');
        expect(page3).toBeInTheDocument();
        expect(page3).not.toHaveClass('pagination-link-active');
        expect(page4).not.toBeInTheDocument();
    
    })

    test('next arrow should call onChange', () => {

        //ARRANGE
        const pageCount = 3;
        const range = 3;
        const onChange = jest.fn();
            
        //ACT
        render(<Pagination pageCount={pageCount} range={range} onChange={onChange}/>)
    
        //ASSERT
        const arrowNext = screen.getByTestId("arrow-next");
        const page1 = screen.getByText("1");
        const page2 = screen.getByText("2");
        const page3 = screen.getByText("3");


        userEvent.click(arrowNext);

        expect(onChange).toHaveBeenCalledWith(1);


        expect(page1).not.toHaveClass('pagination-link-active');
        expect(page2).toHaveClass('pagination-link-active');
        expect(page3).not.toHaveClass('pagination-link-active');
    })

    test('previous arrow should call onChange', () => {

        //ARRANGE
        const pageCount = 3;
        const range = 3;
        const onChange = jest.fn();
        const forcePage = 1;
            
        //ACT
        render(<Pagination pageCount={pageCount} range={range} onChange={onChange} forgePage={forcePage} />)
    
        //ASSERT
        const arrowNext = screen.getByTestId("arrow-previous");
        const page1 = screen.getByText("1");
        const page2 = screen.getByText("2");
        const page3 = screen.getByText("3");


        userEvent.click(arrowNext);

        expect(onChange).toHaveBeenCalledWith(0);


        expect(page1).toHaveClass('pagination-link-active');
        expect(page2).not.toHaveClass('pagination-link-active');
        expect(page3).not.toHaveClass('pagination-link-active');
    })

    test('should render pagination', () => {

        //ARRANGE
        const pageCount = 3;
        const range = 3;
        const onChange = jest.fn();

        //ACT
        render(<Pagination pageCount={pageCount} range={range} onChange={onChange} />)
    
        //ASSERT
        const page2 = screen.getByText("2");
        userEvent.click(page2);
        expect(onChange).toHaveBeenCalledWith(1);
    
    })

});

