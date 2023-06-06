

describe("La ruta de pokemons", () =>{
    it("Debe traer la informacion de todos los pokemons al hacer GET a /pokemons", async () =>{
        const response = await request(server).get("/pokemons")
        expect(response.statusCode).toEqual(404)
    } )
})