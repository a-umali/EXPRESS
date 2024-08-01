// import { addNumbers } from "../controller/calculatorController";


function square(a) {
    return a * a;
   }


describe("addNumbers", () => {

    it('should return', () => {
        const number1 = 10;

        const result = square(number1);

        expect(result).toBe(number1 *  number1);

    });
});