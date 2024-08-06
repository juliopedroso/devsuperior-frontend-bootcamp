import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";
import { Router } from "react-router-dom";
import history from "util/history";
import { server } from './fixtures';

beforeAll(() => {
    console.debug('Before all')
    server.listen()
})

afterEach(() => {
    console.debug('after each')
    server.resetHandlers()
})

afterAll(() => {
    console.debug('after all')
    server.close()
})

test('should render Catalog with products', async () => {

    //ARRANGE


    //ACT
    render(
        <Router history={history}>
            <Catalog />
        </Router>
    );

    //ASSERT
    expect(screen.getByText("Catálogo de produtos")).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText("Smart TV")).toBeInTheDocument()
    });



})


