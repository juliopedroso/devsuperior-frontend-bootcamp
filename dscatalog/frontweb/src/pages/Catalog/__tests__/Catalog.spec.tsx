import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";
import { Router } from "react-router-dom";
import history from "util/history";
import { server } from './fixtures';

beforeAll(() => { server.listen() })

afterEach(() => { server.resetHandlers() })

afterAll(() => { server.close() })

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
        expect(screen.getByText("PC Gamer Max")).toBeInTheDocument()
    });



})


