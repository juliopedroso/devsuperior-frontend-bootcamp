import { render, screen } from "@testing-library/react";
import Form from "../Form";
import { Router, useParams } from "react-router-dom";
import history from "util/history";



jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()

}))

describe('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
    });
    test('should render form', () => {

        //ARRANGE

        //ACT
        render(
            <Router history={history}>
                <Form />
            </Router >

        )

        //ASSERT
        screen.debug();

    });
});
