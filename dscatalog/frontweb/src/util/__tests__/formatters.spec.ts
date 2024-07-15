import { formatPrice } from "util/formatters";

test('formatPrice should format number pt-br when give 10.1',()=> {

    //ARRANGE
    const value = 10.1;

    //ACT
    const result = formatPrice(value);

    //ASSERT
    expect(result).toEqual('10,10');

})