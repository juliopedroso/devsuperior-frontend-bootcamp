import { formatPrice } from "util/formatters";

describe('formatPrince for positive numbers', () => {
    test('formatPrice should format number pt-br when give 10.1', () => {

        //ARRANGE
        const value = 10.1;

        //ACT
        const result = formatPrice(value);

        //ASSERT
        expect(result).toEqual('10,10');

    });

    test('formatPrice should format number pt-br when give 0.1', () => {

        //ARRANGE
        const value = 0.1;

        //ACT
        const result = formatPrice(value);

        //ASSERT
        expect(result).toEqual('0,10');

    });

})

describe('formatPrince for non positive numbers', () => {
    test('formatPrice should format number pt-br when give 0', () => {

        //ARRANGE
        const value = 0;

        //ACT
        const result = formatPrice(value);

        //ASSERT
        expect(result).toEqual('0,00');

    });
    
    test('formatPrice should format number pt-br when give -5.1', () => {

        //ARRANGE
        const value = -5.1;

        //ACT
        const result = formatPrice(value);

        //ASSERT
        expect(result).toEqual('-5,10');

    });

})
