const {
  pokemonById,
  createPokemon,
  pokemons,
  getPokemonByName,
} = require("../controllers/pokemonsControllers");

//  aca en los handlers irian los req/res  try/catch res
// . status etc // y en los controlers las funcioness que me voy a traer los ocntroler retornan solo el resultado

const getPokemonsHandler = async (req, res) => {
    try {
        const { name } = req.query;
        
        const allPokemon = await pokemons();
        if(name){
            const pokemon = await getPokemonByName(name);
          
            res.status(200).json(pokemon);
        }else{
           
            res.status(200).json(allPokemon);
        }
    } catch (error) {
        res.status(400).json({error : error.message});
       
    }
}

const getPokemonHandler = async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const infoPokemon = await pokemonById(idPokemon);
    res.status(200).json(infoPokemon);
  } catch (error) {
    res.status(400).json({ error: error.mesagge });
  }
};

// const getPokemonHandlerName = async (req, res) => {
//   try {
//     const { name } = req.query;
//     let poke = await getPokemonByName(name);
//     res.status(200).json(poke);
//   } catch (error) {
//     res.status(400).json({ error: error.mesagge });
//   }
// };

const newPokemon = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const newPoke = await createPokemon({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });
    res.status(201).json(newPoke);
  } catch (error) {
    res.status(400).json({ error: error.mesagge });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonHandler,
  newPokemon,
  // getPokemonHandlerName,
};
