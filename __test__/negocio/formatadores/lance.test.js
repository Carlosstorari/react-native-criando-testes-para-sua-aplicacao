import { formataMaiorLanceDoLeilao } from "../../../src/negocio/formatadores/lance";

describe("negocio/formatadores/lance", () => {
    describe("formataMaiorLanceDoLeilao", () => {
        it("deve retornar o maior valor de lance", () => {
            const resultado = formataMaiorLanceDoLeilao([1000, 3000], 3000)
            console.log(resultado)
            expect(resultado).toBe(3000);
        })
    });
});