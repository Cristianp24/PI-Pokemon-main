const { Router } = require('express');

const { getPokemonsHandler, getPokemonHandler, newPokemon } = require('../handlers/pokemonsHandlers')


const router = Router();



 router.get('/', getPokemonsHandler);
 router.get('/:idPokemon', getPokemonHandler);
 router.post('/', newPokemon);






module.exports = router;